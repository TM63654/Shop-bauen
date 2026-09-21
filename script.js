// AktivFuß – gemeinsames Vanilla-JS für alle Seiten
// 1) Off-Canvas-Mobilmenü  2) Akkordeon (FAQ + Kurz-FAQ)

(function () {
  "use strict";

  function initOffCanvas() {
    var toggle = document.querySelector(".nav-toggle");
    var offCanvas = document.querySelector(".off-canvas");
    if (!toggle || !offCanvas) return;

    var closeBtn = offCanvas.querySelector(".off-canvas-close");
    var backdrop = offCanvas.querySelector(".off-canvas-backdrop");

    function open() {
      offCanvas.setAttribute("data-open", "true");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      offCanvas.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    }

    toggle.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (backdrop) backdrop.addEventListener("click", close);

    offCanvas.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && offCanvas.getAttribute("data-open") === "true") {
        close();
      }
    });
  }

  function initAccordions() {
    document.querySelectorAll(".accordion-item").forEach(function (item) {
      var trigger = item.querySelector(".accordion-trigger");
      var panel = item.querySelector(".accordion-panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        var isOpen = item.getAttribute("data-open") === "true";
        item.setAttribute("data-open", isOpen ? "false" : "true");
        trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
        panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initOffCanvas();
    initAccordions();
  });
})();
