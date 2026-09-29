// ==========================================================================
// PACK DE STICKERS PARA JOURNAL - INTERAÇÕES & SCRIPTS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Acordeão de Perguntas Frequentes (FAQ)
  initFaqAccordion();

  // 2. Barra de CTA Flutuante para Dispositivos Móveis
  initMobileStickyCta();

  // 3. Suavização de Rolagem para Âncoras
  initSmoothScroll();
});

/**
 * Inicializa a funcionalidade acessível do Acordeão de FAQ
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // Fecha todos os outros itens para manter a experiência limpa e focada
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Alterna o item atual
      if (isCurrentlyActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight + 30}px`;
      }
    });
  });
}

/**
 * Controla a exibição da barra CTA no rodapé em telas móveis após o scroll
 */
function initMobileStickyCta() {
  const mobileBar = document.getElementById('floatingMobileBar');
  const heroSection = document.getElementById('heroSection');
  const offerSection = document.getElementById('oferta');

  if (!mobileBar || !heroSection) return;

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      // Quando o Hero não estiver mais visível na tela, mostramos a barra flutuante
      if (!entry.isIntersecting && window.innerWidth <= 768) {
        mobileBar.classList.add('visible');
      } else {
        mobileBar.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  observer.observe(heroSection);

  // Esconder a barra flutuante quando o usuário já estiver na própria seção de oferta
  if (offerSection) {
    const offerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth <= 768) {
            mobileBar.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    offerObserver.observe(offerSection);
  }
}

/**
 * Suavização e comportamento do clique em botões de CTA
 */
function initSmoothScroll() {
  const scrollButtons = document.querySelectorAll('a[href^="#"]');

  scrollButtons.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
}
