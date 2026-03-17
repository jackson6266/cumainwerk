const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    mobileToggle.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileToggle.textContent = "☰";
    });
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === "alle" || filter === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".project-image img").forEach(img => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImage) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("open");
    }
  });
});

if (lightboxClose && lightbox && lightboxImage) {
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightboxImage.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    }
  });
}

const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const bereich = document.getElementById("bereich")?.value.trim() || "";
    const ort = document.getElementById("ort")?.value.trim() || "";
    const nachricht = document.getElementById("nachricht")?.value.trim() || "";

    const subject = encodeURIComponent("Anfrage über cu-mainwerk.de");
    const body = encodeURIComponent(
      "Name: " + name + "\n" +
      "E-Mail: " + email + "\n" +
      "Bereich: " + bereich + "\n" +
      "Ort des Projekts: " + ort + "\n\n" +
      "Nachricht:\n" + nachricht
    );

    window.location.href = "mailto:mainwerkcu@gmail.com?subject=" + subject + "&body=" + body;
  });
}
