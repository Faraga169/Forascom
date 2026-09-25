/* =========================================================
   FORASCOM - CONTACT FORM HANDLER
   ========================================================= */

(function () {
  'use strict';

  const FORASCOM_WHATSAPP_NUMBER = '201090000000';

  function initContactForm() {
    const form = document.getElementById('lead-contact-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const phoneInput = document.getElementById('contact-phone');
      const emailInput = document.getElementById('contact-email');
      const serviceSelect = document.getElementById('contact-service');
      const budgetSelect = document.getElementById('contact-budget');
      const timelineSelect = document.getElementById('contact-timeline');
      const messageInput = document.getElementById('contact-msg');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value.trim() : '';
      const budget = (budgetSelect && budgetSelect.value.trim()) ? budgetSelect.value.trim() : 'غير محددة';
      const timeline = (timelineSelect && timelineSelect.value.trim()) ? timelineSelect.value.trim() : 'غير محدد';
      const message = messageInput ? messageInput.value.trim() : '';

      // Basic client validation check
      if (!name || !phone || !email || !service || !message) {
        if (!name && nameInput) nameInput.focus();
        else if (!phone && phoneInput) phoneInput.focus();
        else if (!email && emailInput) emailInput.focus();
        else if (!service && serviceSelect) serviceSelect.focus();
        else if (!message && messageInput) messageInput.focus();
        return;
      }

      // Build structured WhatsApp lead message
      const formattedMessage = `أهلاً فريق Forascom 👋

📥 طلب استشارة ومشروع جديد:

• الاسم: ${name}
• الهاتف: ${phone}
• البريد الإلكتروني: ${email}
• الخدمة المطلوبة: ${service}
• الميزانية المتوقعة: ${budget}
• موعد الإطلاق: ${timeline}

💬 تفاصيل المشروع:
${message}`;

      const whatsappUrl = `https://wa.me/${FORASCOM_WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();
