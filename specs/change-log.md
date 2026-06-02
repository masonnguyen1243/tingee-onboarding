# Change Log

## 2026-06-02

### Added
- Khởi tạo dự án theo spec-driven development.
- Tạo `README.md`, `CLAUDE.md`.
- Tạo các file spec: `specs/product-spec.md`, `specs/implementation-plan.md`, `specs/test-plan.md`, `specs/change-log.md`.

### Changed
- Cải thiện `specs/product-spec.md`: thêm tóm tắt 1 dòng + định nghĩa "thành công"; chuyển target users thành bảng "ai cần gì"; tách In Scope thành must-have / nice-to-have; chuyển Acceptance Criteria thành checklist có thể tick; đánh số rõ 7 mục.
- Viết lại `specs/implementation-plan.md` thành 7 phase nhỏ, mỗi phase có checklist rõ ràng: (1) Project setup, (2) Core UI, (3) Core data logic, (4) Connect UI to data, (5) Validation & error states, (6) Local run instructions, (7) ngrok demo. Do trang là tĩnh không backend nên "data logic" được hiểu là mô hình dữ liệu nội dung/điều hướng bằng JS và "connect UI to data" là render UI từ dữ liệu đó.

### Phase 1 — Project Setup
- Tạo cấu trúc `src/`: `index.html`, `css/styles.css`, `js/main.js`, `assets/` (kèm `.gitkeep`).
- Nạp TailwindCSS qua CDN (không cần build step) và cấu hình `tailwind.config`: màu `primary = #e12a41`, font mặc định Be Vietnam Pro.
- Nạp font tiếng Việt Be Vietnam Pro qua Google Fonts.
- Khai báo biến `--color-primary: #e12a41` trong `css/styles.css`.
- Nạp icon Lucide qua CDN; `js/main.js` gọi `lucide.createIcons()` + log xác nhận.
- `index.html` chỉ là trang xác nhận setup, **chưa có business feature** (sidebar/nội dung/TOC sẽ làm từ Phase 2).

### Phase 2 — Core UI
- Task 1 (Header): thêm header sticky vào `src/index.html` gồm logo Tingee (**placeholder** monogram, kèm comment để thay logo chính thức) + tên trang "Onboarding Docs". Dùng màu `primary #e12a41` cho monogram; tên trang ẩn trên màn hình nhỏ (responsive cơ bản). Thay trang xác nhận setup của Phase 1 bằng header + vùng nội dung placeholder.

### Fixed
- QA Header: gỡ `console.log("Phase 1 setup OK")` trong `js/main.js` (thông điệp đã lỗi thời sau khi sang Phase 2, gây nhiễu khi review console). Không còn log thừa khi load trang.

### Notes
- QA Header vs acceptance criteria: PASS các tiêu chí liên quan (header hiện logo+tên trang, màu `#e12a41`, font tiếng Việt đúng dấu, responsive, không lỗi console). Logo Tingee vẫn là placeholder (open item). `<h1>` và màu link active để dành cho task nội dung/sidebar sau — không thêm ở task này.
- Đã hoàn tất Phase 1 (Project Setup) và Phase 2 task 1 (Header). Bước tiếp theo: Phase 2 task 2 (layout 3 cột: sidebar + nội dung + TOC).
- Logo Tingee hiện là placeholder — cần file logo chính thức (SVG/PNG) để thay.
- Cần chủ dự án cung cấp: nội dung tài liệu hướng dẫn chi tiết + logo/mã màu brand chính xác của Tingee, Bảo Kim, OnePay, Payoo.
