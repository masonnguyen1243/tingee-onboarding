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

- Task 6 (Responsive sidebar): thêm mobile drawer cho sidebar. **CSS** (`styles.css`): `#sidebar` mặc định `position:fixed; transform:translateX(-100%)` (ẩn); class `.sidebar-open` → `translateX(0)` (mở); `@media (min-width:1024px)` → `position:sticky; transform:none` (desktop bình thường). **HTML**: hamburger `<button id="menu-toggle">` ở đầu cuối header (`lg:hidden`); backdrop `<div id="sidebar-backdrop">` fixed toàn màn hình `z-30` (ẩn mặc định); nút X `<button id="sidebar-close">` bên trong sidebar header (`lg:hidden`). **JS** (`main.js`): `openSidebar()` / `closeSidebar()` toggle class `sidebar-open` + backdrop `hidden` + `body.style.overflow`; đóng khi click backdrop, click link nav trên mobile, và khi resize lên ≥1024px.
- Task 5 (TOC bên phải): thay placeholder trong `<aside id="toc">` bằng TOC tĩnh. Dùng pattern "indicator rail": `<ul class="border-l border-slate-200">` làm đường ray xám, link active dùng `border-l-2 border-primary -ml-px` để overlay thành đường đỏ nổi bật. 6 mục khớp đúng với các `id` heading trong content (`tingee-tong-quan`, `la-gi`, `tinh-nang`, `onboarding`, `vi-du-api`, `tai-khoan`). Item đầu (H1) ở trạng thái active demo. Hover: border xám nhạt + chữ đậm hơn. Label "Trên trang này" nhỏ, uppercase, tracking-widest.
- Task 4 (Khu vực nội dung mẫu): thêm nội dung mẫu vào `<main id="content">` dùng Tailwind Typography (`prose prose-slate`). Gồm: breadcrumb điều hướng; `<h1>` + `<h2>` với `id` anchor chuẩn hoá (dạng `#partner-section`); đoạn văn; danh sách không thứ tự và có thứ tự; bảng (thead/tbody với badge trạng thái); code block tối (`bg-slate-900`) có nút copy; 4 loại callout (info xanh dương, warning vàng, tip xanh lá, important đỏ primary). Tất cả anchor `id` khớp với `href` ở sidebar. Nội dung đang là placeholder rõ ràng `[NỘI DUNG CHỜ CẬP NHẬT]`.
- Task 3 (Sidebar điều hướng): thêm `<nav id="sidebar-nav">` tĩnh vào sidebar với 4 nhóm đối tác. Mỗi nhóm gồm header (logo/monogram + tên đối tác) và 3 mục nav placeholder. **Tingee**: dùng logo thật + màu `#e12a41` cho link active. **Bảo Kim / OnePay / Payoo**: monogram placeholder `BK/OP/PY` + comment rõ ràng chờ asset chính thức (task 7). Anchor `href` chuẩn hoá dạng `#partner-section` để dùng lại ở Phase 3–4. Link đầu tiên (Tingee › Tổng quan) có trạng thái active demo (`bg-red-50 text-primary`).
- Task 7 (Brand logos & màu): thay toàn bộ monogram placeholder bằng logo thật. **Tingee** — `https://developers.tingee.vn/img/logo_heno.png`. **Bảo Kim** — `https://baokim.vn/new_base/images/logo_slogan.png`. **OnePay** — `https://www.onepay.vn/wp-content/uploads/2022/01/Logo_OnePay.svg`. **Payoo** — `https://inkythuatso.com/uploads/thumbnails/800/2021/12/payoo-logo-inkythuatso-02-15-52-28.jpg`. Tất cả dùng `h-4 w-auto max-w-[4rem] object-contain` để đồng đều kích thước trong sidebar.
- Task 2 (Layout 3 cột): thêm layout 3 cột vào `src/index.html` — sidebar trái (`<aside id="sidebar">`, sticky, `w-64`, ẩn trên mobile/tablet), khu vực nội dung chính (`<main id="content">`, flex-grow), và mục lục phải (`<aside id="toc">`, sticky, `w-56`, chỉ hiện từ xl+). Dùng `max-w-[90rem]` cho toàn trang. Mỗi khu vực có placeholder rõ ràng `[NỘI DUNG CHỜ CẬP NHẬT]` cho các task tiếp theo. Logo Tingee đã thay bằng ảnh thật từ `https://developers.tingee.vn/img/logo_heno.png` (`h-8`).

### Fixed
- QA Header: gỡ `console.log("Phase 1 setup OK")` trong `js/main.js` (thông điệp đã lỗi thời sau khi sang Phase 2, gây nhiễu khi review console). Không còn log thừa khi load trang.

### Notes
- QA Header vs acceptance criteria: PASS các tiêu chí liên quan (header hiện logo+tên trang, màu `#e12a41`, font tiếng Việt đúng dấu, responsive, không lỗi console). Logo Tingee vẫn là placeholder (open item). `<h1>` và màu link active để dành cho task nội dung/sidebar sau — không thêm ở task này.
- Đã hoàn tất Phase 1 (Project Setup) và Phase 2 task 1–2. Bước tiếp theo: Phase 2 task 3 (Sidebar điều hướng markup tĩnh).
- Logo Tingee đã cập nhật dùng ảnh thật từ `https://developers.tingee.vn/img/logo_heno.png`.
- Cần chủ dự án cung cấp: nội dung tài liệu hướng dẫn chi tiết + logo/mã màu brand chính xác của Tingee, Bảo Kim, OnePay, Payoo.
