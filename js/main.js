console.log("Mofu Select loaded");

const header = document.querySelector(".site-header");
const cartButtons = document.querySelectorAll(".product-overlay-btn");
const anchorLinks = document.querySelectorAll('a[href^="#"]');

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 10) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

anchorLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const isActive = item?.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("active");

      const faqIcon = faqItem.querySelector(".faq-icon");
      if (faqIcon) {
        faqIcon.textContent = "+";
      }
    });

    if (item && !isActive) {
      item.classList.add("active");

      const icon = question.querySelector(".faq-icon");
      if (icon) {
        icon.textContent = "×";
      }
    }
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const filterTabs = document.querySelectorAll(".filter-tab");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((button) => {
      button.classList.remove("active");
    });

    tab.classList.add("active");
  });
});
