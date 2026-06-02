// Phase 1 — khởi tạo cơ bản.
// Chưa có business logic; chỉ render icon Lucide và log xác nhận setup.
(function () {
  "use strict";

  // Render các icon Lucide (phần tử có thuộc tính data-lucide).
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  console.log("[Tingee Docs] Phase 1 setup OK");
})();
