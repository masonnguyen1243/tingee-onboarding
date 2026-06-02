# CLAUDE.md

Dự án này tuân theo **simple spec-driven development**. File này hướng dẫn coding agent cách hành xử khi code.

## Nguyên tắc chính

Luôn đọc các file trong `/specs` trước khi code.

## Workflow

Với mỗi task:

1. Đọc các file spec liên quan (`specs/product-spec.md`, `specs/implementation-plan.md`, `specs/test-plan.md`).
2. Chỉ triển khai **một task hoặc một phase** tại một thời điểm.
3. Giữ giải pháp đơn giản, đúng MVP.
4. Tránh thêm thư viện không cần thiết.
5. Không thay đổi architecture trừ khi spec được cập nhật.
6. Sau khi triển khai, cập nhật `specs/change-log.md`.
7. Giải thích cách test thay đổi.

## Coding Style

- Ưu tiên code đơn giản, dễ đọc.
- HTML/CSS/JS thuần + TailwindCSS. Không thêm framework (React, Vue...) trừ khi spec yêu cầu.
- Không over-engineer.
- Không thêm feature không liên quan.
- Giữ thay đổi nhỏ và dễ review.

## Quy tắc riêng của dự án này

- **Màu chính:** `#e12a41`. Dùng nhất quán cho nút, link active, điểm nhấn.
- **Phông chữ:** chọn font hỗ trợ tốt tiếng Việt (vd Inter, Be Vietnam Pro). Tránh font lỗi dấu tiếng Việt.
- **Logo & màu đối tác phải chính xác** theo brand thật của Tingee, Bảo Kim, OnePay, Payoo. Không tự bịa logo hay mã màu; nếu chưa chắc, hỏi lại hoặc để placeholder rõ ràng.
- **Nội dung tài liệu** phải bám sát tài liệu do chủ dự án cung cấp. Khi chưa có nội dung thật, dùng placeholder rõ ràng (vd `[NỘI DUNG CHỜ CẬP NHẬT]`) thay vì tự bịa thông tin kỹ thuật.
- Giao diện tham khảo: https://docs.sepay.vn/woocommerce.html — nhưng phải đẹp và hiện đại hơn.

## Testing

Trước khi nói task đã hoàn thành, hãy cung cấp:

- command để chạy app (hoặc cách mở trang)
- các bước test thủ công
- các issue đã biết nếu có
