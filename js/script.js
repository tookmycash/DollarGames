// DollarGames — site behavior
// Small, dependency-free enhancements: mobile nav toggle, active nav
// highlighting on scroll, and a subtle reveal-on-scroll effect.

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after tapping a link (mobile)
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
  }

  /* ---------------- Active link highlighting ---------------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a[href*='#']");

  if (sections.length && navLinks.length) {
    const highlightNav = () => {
      let currentId = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 110;
        if (window.scrollY >= top) currentId = section.id;
      });
      navLinks.forEach((link) => {
        const hash = link.getAttribute("href").split("#")[1];
        link.classList.toggle("active", hash === currentId);
      });
    };
    window.addEventListener("scroll", highlightNav, { passive: true });
    highlightNav();
  }

  /* ---------------- Reveal on scroll ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- Contact form (static-site friendly) ----------------
     GitHub Pages can't run server code, so this demo just confirms
     submission in-page. Swap in your own form backend (Formspree,
     Getform, etc.) by giving the <form> an action="" URL — see the
     comment in contact.html for details. */
  const contactForm = document.querySelector("#contact-form");
  if (contactForm && !contactForm.hasAttribute("action")) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = contactForm.querySelector(".form-note");
      if (note) note.textContent = "Thanks — hook this form up to a backend (see comments in contact.html) to actually receive messages.";
    });
  }
});
