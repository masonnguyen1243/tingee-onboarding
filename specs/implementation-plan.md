# Implementation Plan

Mỗi phase làm tuần tự, một task một lần. Sau mỗi task: cập nhật `change-log.md` và nêu cách test.

> Lưu ý: Đây là trang **tĩnh, không có backend/database** (xem `product-spec.md` §5). Vì vậy "data logic" ở đây nghĩa là **mô hình dữ liệu nội dung & điều hướng dạng JS** (mảng/đối tượng mô tả các đối tác và section), và "connect UI to data" nghĩa là **render UI từ dữ liệu đó** thay vì hardcode HTML.

---

## Phase 1: Project Setup
- [ ] Tạo cấu trúc thư mục `src/` (`index.html`, `css/`, `js/`, `assets/`)
- [ ] Thêm TailwindCSS qua CDN (đủ cho MVP, không cần build step)
- [ ] Nạp font hỗ trợ tiếng Việt (Be Vietnam Pro / Inter) qua Google Fonts
- [ ] Khai báo màu chính `#e12a41` trong cấu hình Tailwind + biến CSS
- [ ] Nạp bộ icon (Lucide hoặc Heroicons)
- [ ] Tạo `index.html` rỗng và xác nhận mở được trên trình duyệt, không lỗi console

## Phase 2: Core UI (giao diện tĩnh)
- [ ] Header: logo Tingee + tên trang
- [ ] Layout 3 cột: sidebar trái + nội dung giữa + mục lục (TOC) phải
- [ ] Sidebar điều hướng (markup tĩnh trước): nhóm Tingee + Bảo Kim + OnePay + Payoo
- [ ] Khu vực nội dung mẫu: heading, đoạn văn, list, bảng, code block, callout
- [ ] TOC bên phải (tĩnh trước)
- [ ] Responsive: sidebar thu gọn + menu mobile (đóng/mở)
- [ ] Áp đúng logo + mã màu brand của 4 đối tác (Tingee, Bảo Kim, OnePay, Payoo)

## Phase 3: Core Data Logic (mô hình nội dung)
- [ ] Định nghĩa cấu trúc dữ liệu nội dung trong JS (vd `js/data.js`): danh sách đối tác → các section → heading/anchor
- [ ] Mỗi mục có `id` (anchor), `title`, `partner`, và nội dung (placeholder rõ ràng nếu chưa có nội dung thật)
- [ ] Tách dữ liệu khỏi markup để dễ cập nhật nội dung sau này
- [ ] Chuẩn hoá cách sinh `id`/anchor để dùng chung cho sidebar, nội dung và TOC
- [ ] (Khi có) thay placeholder bằng nội dung thật do chủ dự án cung cấp

## Phase 4: Connect UI to Data (render từ dữ liệu)
- [ ] Render sidebar điều hướng từ dữ liệu (thay markup tĩnh ở Phase 2)
- [ ] Render khu vực nội dung từ dữ liệu (heading/section theo đúng `id`)
- [ ] Render TOC từ dữ liệu/section hiện có
- [ ] Anchor link: click sidebar / TOC cuộn mượt tới đúng section; URL có `#section`
- [ ] Scroll spy: TOC highlight section đang xem khi cuộn
- [ ] (Tuỳ chọn) ô filter/tìm kiếm đơn giản lọc sidebar theo dữ liệu
- [ ] (Tuỳ chọn) nút copy cho code block

## Phase 5: Validation & Error States
- [ ] Xử lý khi dữ liệu thiếu/sai (vd section không có nội dung → hiện placeholder rõ ràng)
- [ ] Xử lý anchor không tồn tại (URL `#sai` → không vỡ layout, không lỗi console)
- [ ] Trạng thái rỗng cho filter/tìm kiếm (không có kết quả → thông báo rõ ràng)
- [ ] Fallback khi font/icon CDN load lỗi (vẫn đọc được nội dung)
- [ ] Kiểm tra không có lỗi console ở các luồng chính
- [ ] Kiểm tra tiếng Việt đúng dấu và độ tương phản màu đạt yêu cầu

## Phase 6: Local Run Instructions
- [ ] Cập nhật README: lệnh chạy local (mở file trực tiếp + chạy static server, vd `python3 -m http.server`)
- [ ] Ghi rõ URL local (vd `http://localhost:8000`)
- [ ] Ghi chú troubleshooting (CORS khi mở file://, cache trình duyệt, port bận)
- [ ] Liệt kê các bước test thủ công theo Acceptance Criteria của product-spec

## Phase 7: ngrok Demo Setup
- [ ] Thêm hướng dẫn cài đặt ngrok (link tải / `brew install ngrok`)
- [ ] Lệnh expose static server (vd `ngrok http 8000`)
- [ ] Ghi chú lấy URL public và chia sẻ
- [ ] Demo checklist: mở từ thiết bị khác, kiểm tra responsive + scroll spy + anchor link hoạt động qua URL public
