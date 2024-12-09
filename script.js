'use strict';

// Element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Modal functionality
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

const testimonialsModalFunc = () => {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

if (testimonialsItem) {
  testimonialsItem.forEach((item) => {
    item.addEventListener("click", () => {
      const modalImg = document.querySelector("[data-modal-img]");
      const modalTitle = document.querySelector("[data-modal-title]");
      const modalText = document.querySelector("[data-modal-text]");

      if (modalImg && modalTitle && modalText) {
        modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
        modalTitle.textContent = item.querySelector("[data-testimonials-title]").textContent;
        modalText.textContent = item.querySelector("[data-testimonials-text]").textContent;
      }

      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

if (filterBtn) {
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedValue = btn.textContent.toLowerCase();
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      btn.classList.add("active");
      lastClickedBtn = btn;
    });
  });
}

// Form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs && formBtn) {
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");

if (navigationLinks) {
  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }

      navigationLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
}
