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

### Phase 4 — Connect UI to Data (task 1: Sidebar)
- Xoá toàn bộ markup tĩnh bên trong `<nav id="sidebar-nav">` trong `index.html`; giữ wrapper tag với comment giải thích.
- Thêm vào `js/main.js`: `getValidSectionId()`, `setActiveSidebarItem()`, `renderSidebar()`.
  - `renderSidebar()` duyệt `DOCS.partners[]`, tạo DOM bằng `createElement` (không dùng innerHTML với dữ liệu ngoài), render logo + label cho Bảo Kim / OnePay / Payoo, bỏ qua header cho Tingee (`label: null`).
  - Active state dựa vào URL hash khi tải trang; fallback về mục đầu tiên nếu hash không hợp lệ.
  - Click handler trên mỗi link: cập nhật active state + đóng mobile sidebar.
  - `window.setActiveSidebarItem` exposed sẵn cho scroll spy (Phase 4 task tiếp theo).
  - `hashchange` listener: đồng bộ active state khi dùng back/forward trình duyệt.
- Gỡ bỏ đoạn `sidebar.querySelectorAll("a").forEach(...)` trong main.js cũ (đã tích hợp vào click handler của renderSidebar).

### Phase 3 — Core Data Logic
- Tạo `src/js/data.js`: khai báo `DOCS.partners[]` — 4 đối tác (Tingee, Bảo Kim, OnePay, Payoo) mỗi đối tác có `id`, `name`, `logo`, `label`, và `sections[]`.
- Mỗi `section` gồm: `id` (anchor chuẩn hoá), `partner`, `navTitle` (text sidebar), `pageTitle` (H1 nội dung), `content` (null nếu đã có trong HTML, `'[NỘI DUNG CHỜ CẬP NHẬT]'` nếu chưa), và `headings[]` (các H2 con dùng cho TOC).
- Chuẩn hoá ID qua helper `makeId(partnerSlug, sectionSlug)` → `'{partner}-{slug}'`; dùng chung cho sidebar, nội dung và TOC.
- Tất cả anchor ID trong `data.js` khớp chính xác với các `id` đang dùng trong `index.html` (không đổi HTML).
- Nạp `data.js` vào `index.html` trước `main.js`; `DOCS` sẵn sàng cho Phase 4 render từ dữ liệu.
- Tingee có nội dung thật (`content: null` — đang dùng HTML tĩnh); Bảo Kim/OnePay/Payoo dùng placeholder rõ ràng, chờ chủ dự án cung cấp.

### Phase 4 — Connect UI to Data (task 2: Content rendering)
- Xoá toàn bộ nội dung HTML tĩnh bên trong `<main id="content">` (breadcrumb Tingee + các article/code block hardcode).
- Thêm `<div id="sections-container">` làm anchor điểm; breadcrumb đơn giản hoá còn "Tài liệu › Onboarding".
- Chuyển nội dung 3 section Tingee vào `<template>` elements cuối `<body>`:
  - `tpl-tingee-tong-quan`: H1 + callout info + H2 "Tingee là gì?" + H2 "Tính năng chính" + table.
  - `tpl-tingee-onboarding`: H2 + OL bước onboarding + callout cảnh báo + H2 API ví dụ + code block + callout mẹo + callout quan trọng.
  - `tpl-tingee-tai-khoan`: H2 + placeholder paragraph.
- Thêm vào `js/main.js`: hằng `PROSE_CLS` (Tailwind Typography class string), hàm `renderContent()`.
  - `renderContent()` duyệt `DOCS.partners[]`: với partner có `label` → render divider header (logo + tên); với mỗi section → clone template nếu có hoặc render placeholder dạng prose.
  - Gọi `lucide.createIcons()` sau khi render để init icons trong content đã clone.
- Content giờ là **một trang cuộn dài** gồm đủ 12 section (3 Tingee + 3 Bảo Kim + 3 OnePay + 3 Payoo); sidebar link đã có anchor ID đúng.
- TOC bên phải giữ nguyên tĩnh (sẽ render từ dữ liệu ở task tiếp theo).

### Phase 4 — Connect UI to Data (task 4: Anchor links + smooth scroll)
- Thay `getValidSectionId()` bằng `findAnchorInfo(hash)` — trả về `{ sectionId, anchorId }`, xử lý cả section ID lẫn sub-heading ID (mapping heading → parent section). Dùng chung cho sidebar, TOC và hashchange.
- `renderSidebar()`: active state lúc tải trang dùng `findAnchorInfo` → lấy `sectionId`; click handler giờ gọi thêm `setActiveTocItem(section.id)` để đồng bộ TOC ngay lập tức.
- `renderTOC()`: active state lúc tải trang dùng `findAnchorInfo` → lấy `anchorId` (có thể là heading); click handler section thêm `setActiveSidebarItem`; click handler heading thêm `setActiveSidebarItem(section.id)` (parent section).
- `hashchange` listener: dùng `findAnchorInfo` → cập nhật cả sidebar (`sectionId`) lẫn TOC (`anchorId`). Hoạt động cho cả section và sub-heading link, kể cả khi dùng nút back/forward trình duyệt.
- Thêm `scrollToHash()`: sau khi render xong (renderContent() gắn DOM), tính offset `el.getBoundingClientRect().top + pageYOffset - 80px` và gọi `window.scrollTo({ behavior: 'instant' })`. Giải quyết vấn đề browser cố scroll đến `#hash` trước khi JS render xong nội dung.
- `scroll-behavior: smooth` trên `html` (đã có từ Phase 1 styles.css) xử lý smooth scroll cho tất cả click. `scrollToHash()` dùng `instant` để không animate lúc tải trang lần đầu.

### Phase 4 — Connect UI to Data (task 3: TOC rendering)
- Xoá toàn bộ `<li>` tĩnh bên trong `<nav aria-label="Mục lục trang">` trong `index.html`; thay bằng `<ul id="toc-list">` rỗng (comment giải thích).
- Thêm vào `js/main.js`:
  - Bốn hằng class: `TOC_SECTION_ACTIVE`, `TOC_SECTION_INACTIVE`, `TOC_HEADING_ACTIVE`, `TOC_HEADING_INACTIVE` — phân biệt section (pl-4) và sub-heading (pl-7) với màu active (primary) vs. inactive (slate).
  - `setActiveTocItem(id)`: cập nhật class active/inactive cho tất cả `a[data-toc]` trong `#toc-list`, phân biệt `data-toc-type="section"` vs `"heading"`.
  - `renderTOC()`: duyệt `DOCS.partners[]`; với partner có `label` → thêm `<li>` divider tên đối tác nhỏ uppercase; với mỗi section → tạo link cấp 1 (`pageTitle`); với mỗi `section.headings[]` → tạo link cấp 2 indented hơn. Active state dựa vào URL hash, fallback về section đầu tiên.
  - `window.setActiveTocItem` exposed sẵn cho scroll spy (task tiếp theo).
- `hashchange` listener cập nhật thêm `setActiveTocItem(hash)` (bên cạnh `setActiveSidebarItem`).
- Gọi `renderTOC()` trong init (sau `renderSidebar()` và `renderContent()`).

### Phase 4 — Connect UI to Data (Scroll spy)
- Thêm `initScrollSpy()` vào `js/main.js`, gọi sau `renderTOC()` trong init.
- Kỹ thuật: `window.addEventListener("scroll", ...)` + `requestAnimationFrame` để không block main thread.
- Logic: duyệt tất cả anchor ID (sections + headings) từ `DOCS`; với mỗi element, lấy `getBoundingClientRect().top`; tìm element có `top <= 100` và `top` lớn nhất (vừa scroll qua đường header); đó là mục đang xem. Offset `100` = header 64px + 36px buffer.
- Cập nhật cả `setActiveTocItem(id)` (highlight TOC) lẫn `setActiveSidebarItem(sectionFor[id])` (highlight sidebar) mỗi khi scroll spy phát hiện thay đổi.
- Khi không có element nào qua ngưỡng (user ở đỉnh trang), không thay đổi active state — giữ nguyên trạng thái mặc định từ render.

### Notes
- QA Header vs acceptance criteria: PASS các tiêu chí liên quan (header hiện logo+tên trang, màu `#e12a41`, font tiếng Việt đúng dấu, responsive, không lỗi console). Logo Tingee vẫn là placeholder (open item). `<h1>` và màu link active để dành cho task nội dung/sidebar sau — không thêm ở task này.
- Đã hoàn tất Phase 1 (Project Setup) và Phase 2 task 1–2. Bước tiếp theo: Phase 2 task 3 (Sidebar điều hướng markup tĩnh).
- Logo Tingee đã cập nhật dùng ảnh thật từ `https://developers.tingee.vn/img/logo_heno.png`.
- Cần chủ dự án cung cấp: nội dung tài liệu hướng dẫn chi tiết + logo/mã màu brand chính xác của Tingee, Bảo Kim, OnePay, Payoo.
