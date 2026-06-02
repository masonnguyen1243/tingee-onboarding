// Khởi tạo cơ bản. Chưa có business logic; chỉ render icon Lucide nếu có.
(function () {
  "use strict";

  // Render các icon Lucide (phần tử có thuộc tính data-lucide).
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
})();
