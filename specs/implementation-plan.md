# Implementation Plan

Mỗi phase làm tuần tự, một task một lần. Sau mỗi task: cập nhật `change-log.md` và nêu cách test.

## Phase 1: Project Setup
- [ ] Tạo cấu trúc thư mục `src/` (`index.html`, `css/`, `js/`, `assets/`)
- [ ] Thêm TailwindCSS (qua CDN cho MVP đơn giản)
- [ ] Nạp font hỗ trợ tiếng Việt (vd Be Vietnam Pro / Inter) qua Google Fonts
- [ ] Khai báo màu chính `#e12a41` trong cấu hình Tailwind / biến CSS
- [ ] Nạp bộ icon (Lucide hoặc Heroicons)
- [ ] Xác nhận trang chạy được local (mở file / static server)

## Phase 2: Core UI Layout
- [ ] Header với logo Tingee + tên trang
- [ ] Layout 3 cột: sidebar trái + nội dung giữa + mục lục phải
- [ ] Sidebar điều hướng: nhóm Tingee + Bảo Kim + OnePay + Payoo (dùng dữ liệu mẫu)
- [ ] Khu vực nội dung với heading, đoạn văn, list, bảng, code block mẫu
- [ ] Mục lục (TOC) bên phải (tĩnh trước)
- [ ] Responsive: sidebar thu gọn / menu mobile

## Phase 3: Branding đối tác
- [ ] Thêm logo chính xác của Tingee, Bảo Kim, OnePay, Payoo vào `assets/`
- [ ] Áp đúng mã màu brand cho từng mục đối tác
- [ ] Tạo "card" hoặc section giới thiệu cho từng đối tác

## Phase 4: Nội dung tài liệu
- [ ] Dựng khung section cho từng đối tác (placeholder rõ ràng nếu chưa có nội dung)
- [ ] Đưa nội dung hướng dẫn thật (do chủ dự án cung cấp) vào từng section
- [ ] Thêm hình ảnh / screenshot minh hoạ nếu có
- [ ] Định dạng code block / bảng / ghi chú (callout) cho dễ đọc

## Phase 5: Tương tác (JS)
- [ ] Scroll spy: mục lục highlight section đang xem
- [ ] Click sidebar / TOC cuộn mượt tới section (anchor links)
- [ ] Menu mobile đóng/mở
- [ ] (Tuỳ chọn) ô filter/tìm kiếm đơn giản trong sidebar
- [ ] (Tuỳ chọn) nút copy cho code block

## Phase 6: Local Run Guide
- [ ] Cập nhật README với lệnh chạy local
- [ ] Thêm URL local
- [ ] Ghi chú troubleshooting

## Phase 7: ngrok Demo
- [ ] Thêm hướng dẫn cài đặt ngrok
- [ ] Thêm lệnh expose static server
- [ ] Thêm demo checklist

## Phase 8: Polish & Review cuối
- [ ] Kiểm tra responsive trên nhiều kích thước
- [ ] Kiểm tra hiển thị tiếng Việt (dấu) và độ tương phản màu
- [ ] Kiểm tra logo/màu đối tác chính xác
- [ ] Review toàn bộ so với product-spec.md
