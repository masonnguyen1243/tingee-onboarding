# Change Log

## 2026-06-02

### Added
- Khởi tạo dự án theo spec-driven development.
- Tạo `README.md`, `CLAUDE.md`.
- Tạo các file spec: `specs/product-spec.md`, `specs/implementation-plan.md`, `specs/test-plan.md`, `specs/change-log.md`.

### Changed
- Cải thiện `specs/product-spec.md`: thêm tóm tắt 1 dòng + định nghĩa "thành công"; chuyển target users thành bảng "ai cần gì"; tách In Scope thành must-have / nice-to-have; chuyển Acceptance Criteria thành checklist có thể tick; đánh số rõ 7 mục.
- Viết lại `specs/implementation-plan.md` thành 7 phase nhỏ, mỗi phase có checklist rõ ràng: (1) Project setup, (2) Core UI, (3) Core data logic, (4) Connect UI to data, (5) Validation & error states, (6) Local run instructions, (7) ngrok demo. Do trang là tĩnh không backend nên "data logic" được hiểu là mô hình dữ liệu nội dung/điều hướng bằng JS và "connect UI to data" là render UI từ dữ liệu đó.

### Fixed
- (chưa có)

### Notes
- Chưa viết code app. Bước tiếp theo: review & cải thiện product-spec, sau đó triển khai Phase 1 (Project Setup).
- Cần chủ dự án cung cấp: nội dung tài liệu hướng dẫn chi tiết + logo/mã màu brand chính xác của Tingee, Bảo Kim, OnePay, Payoo.
