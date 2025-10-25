// Mobile menu toggle
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });

// Smooth scrolling and active nav highlighting
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
});

// FAQ toggle functionality
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// Contact form handler
function handleContactForm(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const name =
    formData.get("name") ||
    event.target.querySelector('input[type="text"]').value;
  const email =
    formData.get("email") ||
    event.target.querySelector('input[type="email"]').value;
  const message =
    formData.get("message") || event.target.querySelector("textarea").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  setTimeout(() => {
    alert(
      "Thank you for your message! We'll get back to you within 24-48 hours."
    );
    event.target.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
}

// CTA button handlers
document.querySelectorAll("button").forEach((button) => {
  if (
    button.textContent.includes("Get Instant Access") ||
    button.textContent.includes("Buy & Download")
  ) {
    button.addEventListener("click", function () {
      alert("Redirecting to secure checkout... (This is a demo)");
    });
  } else if (
    button.textContent.includes("Preview the File") ||
    button.textContent.includes("Preview")
  ) {
    button.addEventListener("click", function () {
      alert("Opening file preview... (This is a demo)");
    });
  }
});
// Cloudflare bot protection script
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'98ce4ab4b4c9e784',t:'MTc2MDE4NTAxOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
