// Mobile Menu Toggle
(function () {
  var menuToggle = document.getElementById('menuToggle');
  var headerNav = document.getElementById('headerNav');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function () {
      headerNav.classList.toggle('open');
      var icon = this.querySelector('i');
      if (headerNav.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    headerNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        headerNav.classList.remove('open');
        var icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
})();

// Hero Sliders
function initSlider(containerId, interval) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var slides = container.querySelectorAll('.slide');
  if (slides.length < 2) return;
  var current = 0;

  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, interval);
}

initSlider('sliderMain', 3600);
initSlider('sliderSmTop', 3600);
initSlider('sliderSmBottom', 3600);
initSlider('sliderVertical', 3600);
initSlider('sliderSmRightTop', 3600);
initSlider('sliderSmRightBottom', 3600);

// Contact Form
(function () {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = this.querySelector('button');
      var originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Message Sent!';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          contactForm.reset();
        }, 2000);
      }, 1000);
    });
  }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header scroll shadow effect
(function () {
  var header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
})();

// Page load animation
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
