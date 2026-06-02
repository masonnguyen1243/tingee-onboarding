# CLAUDE.md

Dự án **spec-driven**. Đọc `specs/` trước khi code.

## Quy tắc làm việc

1. Luôn đọc spec liên quan (`specs/product-spec.md`, `specs/implementation-plan.md`, `specs/test-plan.md`) trước khi code.
2. Mỗi lần chỉ làm **một phase hoặc một task**.
3. Giữ app đơn giản, đúng MVP.
4. Không thêm thư viện không cần thiết.
5. Không đổi architecture trừ khi spec được cập nhật.
6. Sau mỗi lần triển khai: cập nhật `specs/change-log.md`.
7. Sau mỗi lần triển khai: nêu rõ cách test thay đổi.

## Coding style

- HTML/CSS/JS thuần + TailwindCSS. Không thêm framework trừ khi spec yêu cầu.
- Code đơn giản, dễ đọc. Không over-engineer, không thêm feature ngoài phạm vi.
- Thay đổi nhỏ, dễ review.

## Quy tắc riêng dự án

- **Màu chính:** `#e12a41` — dùng nhất quán cho nút, link active, điểm nhấn.
- **Font:** hỗ trợ tốt tiếng Việt (vd Be Vietnam Pro / Inter). Tránh font lỗi dấu.
- **Logo & màu đối tác** (Tingee, Bảo Kim, OnePay, Payoo): đúng brand thật. Chưa chắc thì hỏi hoặc để placeholder rõ ràng — không tự bịa.
- **Nội dung tài liệu:** bám tài liệu do chủ dự án cung cấp. Chưa có thì dùng placeholder rõ ràng (vd `[NỘI DUNG CHỜ CẬP NHẬT]`).
- Giao diện tham khảo: https://docs.sepay.vn/woocommerce.html — nhưng đẹp và hiện đại hơn.

## Testing

Trước khi báo task xong, cung cấp: lệnh chạy app (hoặc cách mở trang), các bước test thủ công, và issue đã biết (nếu có).
