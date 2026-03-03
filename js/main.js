'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────
  // 1. Scroll-triggered fade-in animations
  // ──────────────────────────────────────────────
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if (animatedEls.length) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedEls.forEach(el => scrollObserver.observe(el));
  }

  // ──────────────────────────────────────────────
  // 2. Sticky nav background change
  // ──────────────────────────────────────────────
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Set initial state in case the page is loaded already scrolled
    onScroll();
  }

  // ──────────────────────────────────────────────
  // 3. Mobile hamburger menu
  // ──────────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    if (navMenu) {
      navMenu.classList.remove('open');
      navMenu.setAttribute('aria-hidden', 'true');
    }
    if (hamburger) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    if (navMenu) {
      navMenu.classList.add('open');
      navMenu.setAttribute('aria-hidden', 'false');
    }
    if (hamburger) {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // ──────────────────────────────────────────────
  // 4. FAQ accordion
  // ──────────────────────────────────────────────
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parentItem = question.closest('.faq-item');
      const isOpen = parentItem && parentItem.classList.contains('open');

      // Close all other FAQ items
      faqQuestions.forEach(q => {
        const item = q.closest('.faq-item');
        if (item) {
          item.classList.remove('open');
          q.setAttribute('aria-expanded', 'false');
          const answer = item.querySelector('.faq-answer');
          if (answer) answer.setAttribute('hidden', '');
        }
      });

      // Toggle the clicked item (open if it was closed)
      if (!isOpen && parentItem) {
        parentItem.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        const answer = parentItem.querySelector('.faq-answer');
        if (answer) answer.removeAttribute('hidden');
      }
    });
  });

  // ──────────────────────────────────────────────
  // 5. Smooth scroll for anchor links
  // ──────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Close mobile menu if open
      closeMenu();

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ──────────────────────────────────────────────
  // 6. Typing animation for hero mockup
  // ──────────────────────────────────────────────
  const typingEl = document.querySelector('.typing-text');

  if (typingEl) {
    const typingContent = '# Getting Started\n\nThis is **clean Markdown**\nconverted from a webpage.\n\n- Easy to read\n- Easy to copy\n- Works everywhere';
    let charIndex = 0;

    const typingTimer = setInterval(() => {
      if (charIndex < typingContent.length) {
        typingEl.textContent = typingContent.substring(0, charIndex + 1);
        charIndex++;
      } else {
        // Done — stop typing, hide cursor
        clearInterval(typingTimer);
        const cursor = document.querySelector('.typing-cursor');
        if (cursor) cursor.style.display = 'none';
      }
    }, 50);
  }

  // ──────────────────────────────────────────────
  // 7. Active nav link highlighting
  // ──────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(section => sectionObserver.observe(section));
  }

});
