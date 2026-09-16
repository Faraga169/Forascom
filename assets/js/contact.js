/* =========================================================
   CONTACT FORM
   ========================================================= */

(function () {
  'use strict';

  function initContactForm() {
    const form = document.getElementById('lead-contact-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('contact-name')?.value || '';
      const phone = document.getElementById('contact-phone')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const service = document.getElementById('contact-service')?.value || '';
      const message = document.getElementById('contact-msg')?.value || '';
      const budget = document.getElementById('contact-budget')?.value || 'غير محددة';
      const timeline = document.getElementById('contact-timeline')?.value || 'غير محدد';

      const whatsappText = `أهلاً فريق Forascom 👋%0Aأنا: ${encodeURIComponent(name)}%0Aالهاتف: ${encodeURIComponent(phone)}%0Aالبريد الإلكتروني: ${encodeURIComponent(email)}%0Aالخدمة المطلوبة: ${encodeURIComponent(service)}%0Aالميزانية المتوقعة: ${encodeURIComponent(budget)}%0Aموعد الإطلاق: ${encodeURIComponent(timeline)}%0Aتفاصيل المشروع: ${encodeURIComponent(message)}`;

      window.open(`https://wa.me/201090000000?text=${whatsappText}`, '_blank');
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();
