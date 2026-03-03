const lang = localStorage.getItem('lang') || 'en';
setLanguage(lang);

document.addEventListener('DOMContentLoaded', () => {
  bindLangToggle();
  initReveal();
  initGallery();
  initForms();
  initCookieBanner();
  initLoadingScreen();
});

function setLanguage(newLang) {
  const isAr = newLang === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body?.classList.toggle('ar', isAr);
  localStorage.setItem('lang', newLang);
  document.querySelectorAll('[data-en]').forEach(el => {
    const value = el.dataset[newLang];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-ph-en]').forEach(el => {
    const value = el.dataset[`ph${newLang[0].toUpperCase() + newLang.slice(1)}`];
    if (value !== undefined) el.placeholder = value;
  });
  const titleHolder = document.querySelector('body');
  if (titleHolder?.dataset[`title${isAr ? 'Ar' : 'En'}`]) {
    document.title = titleHolder.dataset[`title${isAr ? 'Ar' : 'En'}`];
  }
  const desc = document.querySelector('#meta-description');
  if (desc) desc.setAttribute('content', desc.dataset[isAr ? 'ar' : 'en']);
}

function bindLangToggle() {
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(localStorage.getItem('lang') === 'ar' ? 'en' : 'ar');
    });
  });
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initGallery() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.cat === filter) ? 'block' : 'none';
      });
    });
  });
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'grid';
      lightbox.querySelector('img').src = img.src;
      lightbox.querySelector('img').alt = img.alt;
    });
  });
  lightbox.addEventListener('click', () => lightbox.style.display = 'none');
}

function initForms() {
  const bookingForm = document.querySelector('#booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'RSH-' + Math.random().toString(36).slice(2, 8).toUpperCase();
      const output = document.querySelector('#booking-result');
      output.innerHTML = `<p>${localStorage.getItem('lang') === 'ar' ? 'تم استلام الحجز بنجاح. رقم الحجز:' : 'Booking received successfully. Reference:'} <strong>${ref}</strong></p>`;
      bookingForm.reset();
    });
  }
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const output = document.querySelector('#contact-result');
      output.textContent = localStorage.getItem('lang') === 'ar' ? 'شكراً لتواصلكم. سنرد عليكم قريباً.' : 'Thank you. We will get back to you soon.';
      contactForm.reset();
    });
  }
}

function initCookieBanner() {
  const key = 'cookie-accepted';
  const bar = document.querySelector('.cookie');
  if (!bar) return;
  if (!localStorage.getItem(key)) bar.style.display = 'block';
  const accept = bar.querySelector('button');
  accept?.addEventListener('click', () => {
    localStorage.setItem(key, '1');
    bar.style.display = 'none';
  });
}

function initLoadingScreen() {
  const loader = document.querySelector('.loading-screen');
  if (!loader) return;
  window.setTimeout(() => {
    loader.style.opacity = '0';
    window.setTimeout(() => loader.remove(), 450);
  }, 700);
}
