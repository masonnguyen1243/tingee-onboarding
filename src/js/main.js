(function () {
  "use strict";

  // Render Lucide icons
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // ── Mobile sidebar toggle ──────────────────────────────
  var toggleBtn  = document.getElementById("menu-toggle");
  var closeBtn   = document.getElementById("sidebar-close");
  var sidebar    = document.getElementById("sidebar");
  var backdrop   = document.getElementById("sidebar-backdrop");

  function openSidebar() {
    sidebar.classList.add("sidebar-open");
    backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("sidebar-open");
    backdrop.classList.add("hidden");
    document.body.style.overflow = "";
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openSidebar);
  if (closeBtn)  closeBtn.addEventListener("click", closeSidebar);
  if (backdrop)  backdrop.addEventListener("click", closeSidebar);

  // Close on nav link click (mobile only)
  if (sidebar) {
    sidebar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 1024) closeSidebar();
      });
    });
  }

  // Reset on resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) closeSidebar();
  });
})();
