# Tingee Onboarding Docs

Trang tài liệu hướng dẫn onboarding cho **Tingee** ([tingee.vn](https://tingee.vn)) và 3 đối tác tích hợp thanh toán:

- **Bảo Kim** — [baokim.vn](https://baokim.vn)
- **OnePay** — [onepay.vn](https://www.onepay.vn)
- **Payoo** — [payoo.vn](https://www.payoo.vn)

Trang được xây dựng theo phong cách tài liệu kỹ thuật (tham khảo [docs.sepay.vn](https://docs.sepay.vn/woocommerce.html)) nhưng giao diện hiện đại và gọn gàng hơn.

---

## Mục tiêu

Một trang web tĩnh (static), đơn giản, đẹp, dễ đọc, giúp người dùng mới làm theo từng bước để tích hợp / sử dụng dịch vụ của Tingee cùng các đối tác.

## Stack

- **HTML + CSS + JavaScript** (thuần, không framework)
- **TailwindCSS** cho styling
- Bộ **icon** đẹp (Lucide / Heroicons)
- Không backend — chỉ frontend tĩnh

## Đặc điểm giao diện

| Hạng mục | Giá trị |
|---|---|
| Màu chính | `#e12a41` |
| Phông chữ | Font hỗ trợ tốt tiếng Việt (vd: Inter / Be Vietnam Pro) |
| Bố cục | Sidebar điều hướng + nội dung tài liệu + mục lục |
| Logo & màu đối tác | Phải chính xác theo brand từng công ty |

---

## Cấu trúc dự án (dự kiến)

```txt
FAQ_BU1/
├── README.md
├── CLAUDE.md
├── specs/
│   ├── product-spec.md
│   ├── implementation-plan.md
│   ├── test-plan.md
│   └── change-log.md
└── src/                # sẽ tạo khi bắt đầu code
    ├── index.html
    ├── assets/         # logo, hình ảnh đối tác
    ├── css/
    └── js/
```

---

## Cách chạy local

> Sẽ được cập nhật khi app được triển khai (Phase 6).

Dự kiến: mở `src/index.html` trực tiếp, hoặc chạy một static server đơn giản:

```bash
# ví dụ
npx serve src
```

## Demo bằng ngrok

> Sẽ được cập nhật ở Phase 7.

---

## Quy trình phát triển

Dự án này tuân theo **spec-driven development**. Xem chi tiết trong:

- [`specs/product-spec.md`](specs/product-spec.md) — mục tiêu, người dùng, tính năng
- [`specs/implementation-plan.md`](specs/implementation-plan.md) — các phase triển khai
- [`specs/test-plan.md`](specs/test-plan.md) — cách kiểm thử
- [`specs/change-log.md`](specs/change-log.md) — lịch sử thay đổi
- [`CLAUDE.md`](CLAUDE.md) — quy tắc cho coding agent

> **Lưu ý:** Nội dung tài liệu hướng dẫn chi tiết sẽ được chủ dự án cung cấp sau và sẽ được đưa vào trang ở các phase nội dung.
