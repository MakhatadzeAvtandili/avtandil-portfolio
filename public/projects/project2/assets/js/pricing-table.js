/**
 * Glow Pricing Table v1.0.0
 * Copyright 2025 YourName/YourCompany
 * Vanilla JS for billing toggle, animations, and tooltips.
 */
document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /**
   * Price Toggling Functionality
   */
  const pricingTables = document.querySelectorAll(".pt");

  pricingTables.forEach((table) => {
    const toggle = table.querySelector(".pt__toggle-switch");
    if (!toggle) return;

    const priceElements = table.querySelectorAll(".pt__price-value");

    toggle.addEventListener("click", () => {
      const isYearly = toggle.getAttribute("aria-checked") === "false";
      toggle.setAttribute("aria-checked", isYearly);

      priceElements.forEach((priceEl) => {
        const monthlyPrice = parseFloat(priceEl.dataset.monthly);
        const yearlyPrice = parseFloat(priceEl.dataset.yearly);

        const oldPrice = isYearly ? monthlyPrice : yearlyPrice;
        const newPrice = isYearly ? yearlyPrice : monthlyPrice;

        animateCountUp(priceEl, oldPrice, newPrice);
      });
    });
  });

  /**
   * Animates a number counting up.
   * @param {HTMLElement} el The element containing the number.
   * @param {number} start The starting number.
   * @param {number} end The ending number.
   * @param {number} duration The duration of the animation in ms.
   */
  function animateCountUp(el, start, end, duration = 300) {
    if (reducedMotion) {
      el.textContent = end;
      return;
    }

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      el.textContent = current;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  /**
   * Tooltip Functionality
   */
  let activeTooltip = null;
  const tooltipElement = document.createElement("div");
  tooltipElement.className = "pt-tooltip";
  tooltipElement.setAttribute("role", "tooltip");
  document.body.appendChild(tooltipElement);

  const tooltipTriggers = document.querySelectorAll("[data-tooltip]");

  const showTooltip = (trigger) => {
    const tooltipText = trigger.dataset.tooltip;
    tooltipElement.textContent = tooltipText;
    tooltipElement.classList.add("visible");

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    let top = triggerRect.bottom + window.scrollY + 8;
    let left =
      triggerRect.left +
      window.scrollX +
      triggerRect.width / 2 -
      tooltipRect.width / 2;

    // Prevent tooltip from going off-screen
    if (left < 10) left = 10;
    if (left + tooltipRect.width > document.documentElement.clientWidth - 10) {
      left = document.documentElement.clientWidth - tooltipRect.width - 10;
    }
    if (
      top + tooltipRect.height >
      document.documentElement.clientHeight + window.scrollY - 10
    ) {
      top = triggerRect.top + window.scrollY - tooltipRect.height - 8;
    }

    tooltipElement.style.top = `${top}px`;
    tooltipElement.style.left = `${left}px`;

    activeTooltip = tooltipElement;
  };

  const hideTooltip = () => {
    if (activeTooltip) {
      activeTooltip.classList.remove("visible");
      activeTooltip = null;
    }
  };

  tooltipTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => showTooltip(trigger));
    trigger.addEventListener("focus", () => showTooltip(trigger));
    trigger.addEventListener("mouseleave", hideTooltip);
    trigger.addEventListener("blur", hideTooltip);
  });

  // Hide tooltip on ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideTooltip();
    }
  });

  // Hide tooltip on scroll to prevent detachment
  window.addEventListener("scroll", hideTooltip, { passive: true });
});
