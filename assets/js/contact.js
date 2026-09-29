
/* =========================================================
   FORASCOM - CONTACT FORM HANDLER
   ========================================================= */

(function () {
  'use strict';

  const FORASCOM_WHATSAPP_NUMBER = '201501795004';

  function translate(key, fallback) {
    return window.forascomI18n?.t(key, fallback) || fallback;
  }

  function initDirectWhatsAppLink() {
    const link = document.querySelector('[data-whatsapp-message-key]');
    if (!link) return;

    const updateMessage = () => {
      const messageKey = link.dataset.whatsappMessageKey;
      if (!messageKey) return;
      const message = translate(messageKey, '');
      link.href = `https://wa.me/${FORASCOM_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    updateMessage();
    window.addEventListener('forascom:langchange', updateMessage);
  }

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
      const service = serviceSelect
        ? serviceSelect.selectedOptions[0]?.textContent.trim() || serviceSelect.value.trim()
        : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Get budget value
      let budget = translate('contact.whatsapp.unspecifiedBudget', 'Not specified');

      if (budgetSelect) {
        if (budgetSelect.value === 'custom') {
          const customBudget = budgetCustomInput
            ? budgetCustomInput.value.trim()
            : '';

          budget = customBudget || translate('contact.whatsapp.unspecifiedBudget', 'Not specified');
        } else if (budgetSelect.value) {
          budget = budgetSelect.selectedOptions[0]?.textContent.trim() || budgetSelect.value;
        }
      }

      // Get timeline value
      let timeline = translate('contact.whatsapp.unspecifiedTimeline', 'Not specified');

      if (timelineSelect) {
        if (timelineSelect.value === 'custom') {
          const customTimeline = timelineCustomInput
            ? timelineCustomInput.value.trim()
            : '';

          timeline = customTimeline || translate('contact.whatsapp.unspecifiedTimeline', 'Not specified');
        } else if (timelineSelect.value) {
          timeline = timelineSelect.selectedOptions[0]?.textContent.trim() || timelineSelect.value;
        }
      }

      // Basic client validation
      if (!name || !phone || (emailInput && !email) || !service || !message) {
        if (!name && nameInput) {
          nameInput.focus();
        } else if (!phone && phoneInput) {
          phoneInput.focus();
        } else if (emailInput && !email) {
          emailInput.focus();
        } else if (!service && serviceSelect) {
          serviceSelect.focus();
        } else if (!message && messageInput) {
          messageInput.focus();
        }

        return;
      }

      // Build structured WhatsApp lead message
      const formattedMessage = [
        `🌐 *${translate('contact.whatsapp.title', 'Forascom Website — New Project Lead')}*`,
        '',
        `${translate('contact.whatsapp.greeting', 'Hello Forascom team,')} 👋`,
        '',
        translate('contact.whatsapp.request', 'A new project request was submitted through the website.'),
        '',
        `📋 *${translate('contact.whatsapp.details', 'Client details')}*`,
        `• ${translate('contact.whatsapp.name', 'Name')}: ${name}`,
        `• ${translate('contact.whatsapp.phone', 'Phone')}: ${phone}`,
        ...(email ? [`• ${translate('contact.whatsapp.email', 'Email')}: ${email}`] : []),
        '',
        `🛠️ *${translate('contact.whatsapp.service', 'Required service')}*`,
        service,
        '',
        `💰 *${translate('contact.whatsapp.budget', 'Estimated budget')}*`,
        budget,
        '',
        `📅 *${translate('contact.whatsapp.timeline', 'Target launch')}*`,
        timeline,
        '',
        `💬 *${translate('contact.whatsapp.project', 'Project details')}*`,
        message,
        '',
        `📞 ${translate('contact.whatsapp.closing', 'Please contact the client to discuss the details and next steps.')}`,
      ].join('\n');

      const whatsappUrl =
        `https://wa.me/${FORASCOM_WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initDirectWhatsAppLink();
      initContactForm();
    });
  } else {
    initDirectWhatsAppLink();
    initContactForm();
  }
})();
