
/* =========================================================
   FORASCOM - CONTACT FORM HANDLER
   ========================================================= */

(function () {
  'use strict';

  const FORASCOM_WHATSAPP_NUMBER = '201501795004';

  function initContactForm() {
    const form = document.getElementById('lead-contact-form');
    if (!form) return;

    const budgetSelect = document.getElementById('contact-budget');
    const budgetCustomInput = document.getElementById('contact-budget-custom');

    const timelineSelect = document.getElementById('contact-timeline');
    const timelineCustomInput = document.getElementById('contact-timeline-custom');

    // Toggle custom budget input
    if (budgetSelect && budgetCustomInput) {
      budgetSelect.addEventListener('change', () => {
        const isCustom = budgetSelect.value === 'custom';

        budgetCustomInput.classList.toggle('hidden', !isCustom);

        if (isCustom) {
          budgetCustomInput.focus();
        } else {
          budgetCustomInput.value = '';
        }
      });
    }

    // Toggle custom timeline input
    if (timelineSelect && timelineCustomInput) {
      timelineSelect.addEventListener('change', () => {
        const isCustom = timelineSelect.value === 'custom';

        timelineCustomInput.classList.toggle('hidden', !isCustom);

        if (isCustom) {
          timelineCustomInput.focus();
        } else {
          timelineCustomInput.value = '';
        }
      });
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const phoneInput = document.getElementById('contact-phone');
      const emailInput = document.getElementById('contact-email');
      const serviceSelect = document.getElementById('contact-service');
      const messageInput = document.getElementById('contact-msg');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Get budget value
      let budget = 'غير محددة';

      if (budgetSelect) {
        if (budgetSelect.value === 'custom') {
          const customBudget = budgetCustomInput
            ? budgetCustomInput.value.trim()
            : '';

          budget = customBudget || 'غير محددة';
        } else if (budgetSelect.value) {
          budget = budgetSelect.value;
        }
      }

      // Get timeline value
      let timeline = 'غير محدد';

      if (timelineSelect) {
        if (timelineSelect.value === 'custom') {
          const customTimeline = timelineCustomInput
            ? timelineCustomInput.value.trim()
            : '';

          timeline = customTimeline || 'غير محدد';
        } else if (timelineSelect.value) {
          timeline = timelineSelect.value;
        }
      }

      // Basic client validation
      if (!name || !phone || !email || !service || !message) {
        if (!name && nameInput) {
          nameInput.focus();
        } else if (!phone && phoneInput) {
          phoneInput.focus();
        } else if (!email && emailInput) {
          emailInput.focus();
        } else if (!service && serviceSelect) {
          serviceSelect.focus();
        } else if (!message && messageInput) {
          messageInput.focus();
        }

        return;
      }

      // Build structured WhatsApp lead message
      const formattedMessage = `🌐 *Forascom Website — New Project Lead*

أهلاً فريق Forascom 👋

وصل طلب مشروع جديد من خلال الموقع.

📋 *بيانات العميل*
• الاسم: ${name}
• الهاتف: ${phone}
• البريد الإلكتروني: ${email}

🛠️ *الخدمة المطلوبة*
${service}

💰 *الميزانية المتوقعة*
${budget}

📅 *موعد الإطلاق المتوقع*
${timeline}

💬 *تفاصيل المشروع*
${message}

📞 يرجى التواصل مع العميل لمناقشة التفاصيل والخطوات القادمة.`;

      const whatsappUrl =
        `https://wa.me/${FORASCOM_WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();
