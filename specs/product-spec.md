# Product Spec

## App Name

**Tingee Onboarding Docs** — Trang tài liệu hướng dẫn onboarding cho Tingee và đối tác.

> Một trang web tài liệu tĩnh, đẹp và dễ đọc, gom hướng dẫn onboarding của Tingee và 3 đối tác thanh toán (Bảo Kim, OnePay, Payoo) vào một nơi duy nhất.

---

## 1. Goal

Giúp người dùng mới onboard và tích hợp dịch vụ thanh toán của **Tingee** cùng 3 đối tác **Bảo Kim**, **OnePay**, **Payoo** một cách dễ dàng, theo từng bước rõ ràng.

**Vấn đề cần giải quyết:** Người dùng mới không biết bắt đầu từ đâu; hướng dẫn tích hợp của từng đối tác bị rời rạc, khó tra cứu. Trang này gom tất cả vào một nơi, trình bày nhất quán, trực quan.

**Thành công nghĩa là:** Một người dùng mới có thể tự đọc trang và hoàn thành các bước onboarding mà không cần hỏi thêm support.

---

## 2. Target Users

| Người dùng | Họ cần gì |
|---|---|
| Khách hàng / merchant mới của Tingee | Hướng dẫn onboarding từng bước, dễ làm theo |
| Đối tác / lập trình viên tích hợp | Tra cứu nhanh cách tích hợp với Bảo Kim / OnePay / Payoo |
| Nhân viên sales / support Tingee | Một trang chuẩn để gửi và hướng dẫn khách |

---

## 3. Core User Flow

**Luồng chính:**

1. User mở trang tài liệu.
2. Thấy sidebar điều hướng bên trái (Tingee + 3 đối tác + các mục hướng dẫn).
3. Chọn một mục (vd "Hướng dẫn tích hợp OnePay").
4. Khu vực nội dung hiển thị hướng dẫn theo từng bước — có heading, hình ảnh, bảng, code/ví dụ.
5. User đọc và làm theo; dùng mục lục bên phải để nhảy nhanh giữa các phần.
6. User chuyển sang đối tác khác khi cần.

**Khi cuộn:** mục lục bên phải tự highlight phần đang xem (scroll spy).

---

## 4. Features In Scope (MVP)

**Bắt buộc (must-have):**

- Trang tĩnh HTML responsive (desktop + mobile).
- **Header** với logo Tingee + tên trang.
- **Sidebar điều hướng** bên trái, nhóm theo Tingee và 3 đối tác.
- **Khu vực nội dung** chính: heading, đoạn văn, danh sách, bảng, code block, hình ảnh.
- **Mục lục (TOC)** bên phải, tự highlight mục đang xem (scroll spy).
- **Branding chính xác:** logo + màu đúng của Tingee, Bảo Kim, OnePay, Payoo.
- Tông màu chính `#e12a41`; font đẹp, hiển thị tiếng Việt chuẩn.
- Icon đẹp (Lucide/Heroicons) cho điều hướng và điểm nhấn.
- Anchor link tới từng mục (chia sẻ link tới đúng section).

**Nên có nếu kịp (nice-to-have):**

- Ô filter/tìm kiếm đơn giản trong sidebar.
- Nút "copy" cho code block.

---

## 5. Features Out of Scope

- Authentication / đăng nhập.
- Payments / xử lý thanh toán thật.
- Admin dashboard / CMS quản trị nội dung.
- Backend / database (trang hoàn toàn tĩnh).
- Đa ngôn ngữ (chỉ tiếng Việt ở MVP).
- Tìm kiếm full-text nâng cao.
- Production cloud deployment (chỉ chạy local + demo ngrok).

---

## 6. Acceptance Criteria

Trang được coi là đạt MVP khi tất cả mục dưới đây đúng:

- [ ] Mở được trang local (mở file hoặc static server) và thấy giao diện hoàn chỉnh, không lỗi console.
- [ ] Sidebar hiển thị đủ Tingee + 3 đối tác và điều hướng đúng tới nội dung tương ứng.
- [ ] Logo và màu sắc của cả 4 thương hiệu hiển thị **chính xác** theo brand thật.
- [ ] Màu chính `#e12a41` được dùng nhất quán ở nút, link active và điểm nhấn.
- [ ] Font hiển thị tiếng Việt đúng dấu, không lỗi ký tự.
- [ ] Giao diện responsive: dùng tốt trên cả desktop và mobile.
- [ ] Mục lục bên phải highlight đúng mục đang xem khi cuộn (scroll spy).
- [ ] Anchor link hoạt động (URL có `#section`, mở lại đúng vị trí).
- [ ] Nội dung hướng dẫn khớp với tài liệu do chủ dự án cung cấp (MVP đầu có thể dùng placeholder rõ ràng, sẽ thay bằng nội dung thật).
- [ ] Trang demo được bằng ngrok và truy cập được từ thiết bị khác.

---

## 7. Cần chủ dự án cung cấp (open items)

- Nội dung tài liệu hướng dẫn chi tiết cho từng đối tác.
- File logo chính thức (SVG/PNG) và mã màu brand chính xác của Tingee, Bảo Kim, OnePay, Payoo.
