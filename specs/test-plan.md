# Test Plan

Trang là static frontend nên test chủ yếu **thủ công** trên trình duyệt. Mỗi feature kiểm theo acceptance criteria trong `product-spec.md`.

## Cách chạy để test

- Mở `src/index.html` trực tiếp trong trình duyệt, hoặc
- Chạy static server: `npx serve src` rồi mở URL local.

## 1. Layout & hiển thị
- [ ] Trang load không lỗi console.
- [ ] Header hiển thị logo Tingee + tên trang.
- [ ] Bố cục 3 cột (sidebar / nội dung / mục lục) hiển thị đúng trên desktop.
- [ ] Font tiếng Việt hiển thị đúng dấu, không lỗi ký tự.
- [ ] Màu chính `#e12a41` dùng nhất quán ở nút/link active/điểm nhấn.

## 2. Điều hướng (Navigation)
- [ ] Sidebar liệt kê đủ Tingee + Bảo Kim + OnePay + Payoo.
- [ ] Click mục trong sidebar cuộn tới đúng section.
- [ ] Mục lục bên phải highlight đúng section đang xem khi cuộn (scroll spy).
- [ ] Anchor link hoạt động (URL có `#section`, mở lại đúng vị trí).

## 3. Branding đối tác
- [ ] Logo 4 thương hiệu hiển thị đúng, không vỡ hình.
- [ ] Màu sắc từng đối tác đúng brand.
- [ ] Không có logo/màu bịa hoặc placeholder còn sót khi đã có asset thật.

## 4. Nội dung
- [ ] Nội dung khớp tài liệu chủ dự án cung cấp.
- [ ] Code block, bảng, danh sách, callout hiển thị đúng định dạng.
- [ ] Không còn placeholder `[NỘI DUNG CHỜ CẬP NHẬT]` khi đã có nội dung thật.

## 5. Responsive
- [ ] Mobile (≤ 768px): sidebar thu gọn thành menu, mở/đóng được.
- [ ] Nội dung không tràn ngang, đọc được trên màn hình nhỏ.
- [ ] Tablet và desktop rộng hiển thị hợp lý.

## 6. Edge cases
- [ ] Section rỗng / chưa có nội dung không làm vỡ layout.
- [ ] Reload trang ở giữa tài liệu vẫn giữ đúng vị trí anchor.
- [ ] Tên/đường dẫn ảnh sai → có fallback, không vỡ toàn trang.

## 7. Demo
- [ ] Trang chạy được qua ngrok và truy cập từ thiết bị khác.
