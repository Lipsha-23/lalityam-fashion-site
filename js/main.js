document.addEventListener("DOMContentLoaded", () => {
  // Load Products from JSON
  fetch("products.json")
    .then((res) => res.json())
    .then((products) => {
      const container = document.getElementById("product-container");
      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        `;
        container.appendChild(card);
      });
    });

  // Mobile Nav Toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });

  // Search Overlay
  const searchBtn = document.querySelector(".search-btn");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("hidden");
  });
  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.add("hidden");
  });

  // Cart Overlay
  const cartBtn = document.querySelector(".cart-btn");
  const cart = document.getElementById("cart");
  const closeCart = document.getElementById("closeCart");

  cartBtn.addEventListener("click", () => {
    cart.classList.remove("hidden");
  });
  closeCart.addEventListener("click", () => {
    cart.classList.add("hidden");
  });

  // Hero Slider
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  showSlide(current);

  // Contact Form Validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (!name.value.trim()) {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = "Valid email is required";
      isValid = false;
    }

    if (!message.value.trim()) {
      messageError.textContent = "Message is required";
      isValid = false;
    }

    if (isValid) {
      alert("Message submitted successfully!");
      form.reset();
    }
  });
});
