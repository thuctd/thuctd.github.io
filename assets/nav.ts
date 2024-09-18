import { ENVIDB } from './../app/share/env-idb.interface';

export const NAV: ENVIDB[] =
  [

    {
      label: 'Admin', link: 'admin', dbName: 'admin', dbVer: 2, global: false, icon: 'security',
      sub: [
        { label: 'Người dùng', link: 'admin/user', api: 'user', guest: false, icon: 'manage_accounts', index: [] },
        { label: 'Nhật ký', link: 'admin/log', api: 'log', guest: false, icon: 'receipt_long', index: [] },
        { label: 'Crypt', link: 'admin/crypt', api: 'dev', guest: false, icon: 'admin_panel_settings', index: [] },
      ]
    },
    {
      label: 'Email', link: 'email', dbName: 'email', dbVer: 1, global: true, guest: false, icon: 'forward_to_inbox',
      sub: [
        { label: 'Tiền lương', link: 'email/tien-luong', api: 'tien-luong', guest: false, icon: 'email', index: [] },
        { label: 'Thông báo', link: 'email/thong-bao', api: 'thong-bao', guest: false, icon: 'attach_email', index: [] },
      ]
    },
    {
      label: 'Trắc nghiệm', link: 'trac-nghiem', dbName: 'trac-nghiem', dbVer: 4, global: true, guest: false, icon: 'quiz',
      sub: [
        { label: 'Trắc nghiệm', link: 'trac-nghiem', api: 'trac-nghiem', guest: false, index: ['Nhom', 'PhanLoai'] },
        { label: 'Elearning', link: 'trac-nghiem/elearning', api: 'elearning', guest: false, icon: 'quiz', index: [] },
      ]
    },
    {
      label: '', link: '', dbName: 'user', dbVer: 1, global: false,
      sub: [
        { label: 'Công nợ   thu Chi', link: 'user/thu-chi', api: 'thu-chi', guest: false, icon: 'attach_money', index: [] },
        { label: 'Cài đặt', link: 'taikhoan/cau-hinh', api: 'cau-hinh', guest: false, icon: 'settings', index: [] },
      ]
    },
    {
      label: '', link: '', dbName: 'firebase-local', dbVer: 1, global: true,
      sub: [
        { label: '', link: '', api: 'any', guest: false, icon: '', index: ['type'] },
      ]
    },
    {
      label: 'Tiện ích', link: 'tienich', dbName: 'app', dbVer: 1, global: true, guest: false, icon: 'construction',
      sub: [
        // { label: 'Barcode Generate', link: 'tienich/barcode-generate', api: 'barcode', guest: false, icon: 'qr_code_scanner', index: [] },
        { label: 'Đặt tên file', link: 'tienich/ten-file', api: 'ten-file', guest: false, icon: 'insert_drive_file', index: [] },
        { label: 'Merge', link: 'tienich/merge', api: 'merge', guest: true, icon: 'history_edu', index: [] },
        //  { label: '', link: 'tienich/cmis4', api: 'cmis4', guest: false, icon: 'history_edu' , index: ['']},
        { label: 'CSKH', link: 'tienich/cskh', api: 'cmis4-app-cskh', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { label: 'HTML', link: 'tienich/html', api: 'hmtl', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
        { label: 'Combine Excel', link: 'tienich/combine-excel', api: 'combine-excel', guest: false, icon: 'history_edu', index: ['MA_KHANG', 'DTHOAI_KH'] },
      ]
    },
    {
      label: 'Kinh doanh', link: 'cmis4', dbName: 'cmis4', dbVer: 2, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'CMIS4', link: 'cmis4', api: 'cmis4', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-tra-cuu', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-cap-dien', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-lien-he', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-bao-cao-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-bien-ban-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-quyet-toan-dmt', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
        { label: '', link: '', api: 'cmis4-chi-so', guest: false, icon: 'history_edu', index: ['MA_KHANG'] },
      ]
    },
    {
      label: 'Điện lực', link: 'dien-luc', dbName: 'dien-luc', dbVer: 9, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'Lập bảng kê', link: 'dien-luc/dmt-input', api: 'dmt-input', guest: false, icon: 'description', index: ['KyThanhToan', 'KyKeKhai', 'TrangThaiHoSo', 'TrangThaiThanhToan', 'NgayThanhToan', 'TenBangKe', 'Nam', 'CoHoaDon', 'MaKhachHang'] },
        { label: 'Chỉ số ĐMT', link: 'dien-luc/dmt-chi-so', api: 'dmt-chi-so', guest: false, icon: 'description', index: ['THANG', 'NAM', 'MA_KHANG', 'KyThanhToan'] },
        { label: '', link: '', api: 'dmt-accept', guest: false, icon: '', index: [] },
        { label: 'Danh sách bảng kê', link: 'dien-luc/dmt-pay', api: 'dmt-pay', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { label: 'Kê khai thuế', link: 'dien-luc/dmt-tax', api: 'dmt-tax', guest: false, icon: 'description', index: ['TrangThai', 'KyThanhToan', 'TenBangKe', 'Nam'] },
        { label: 'Khách hàng', link: 'dien-luc/dmt-khach-hang', api: 'dmt-khach-hang', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { label: 'Lịch sử cập nhật', link: 'dien-luc/dmt-history', api: 'dmt-history', guest: false, icon: 'description', index: ['MaKhachHang'] },
        { label: 'Cài đặt', link: 'dien-luc/dmt-setup', api: 'dmt-setup', guest: false, icon: 'description', index: [] },

      ]
    },
    {
      label: 'UNC', link: 'dien-luc', dbName: 'unc', dbVer: 1, global: true, guest: false, icon: 'construction',
      sub: [
        { label: 'Khách hàng', link: 'dien-luc/unc-khach-hang', api: 'unc-khach-hang', guest: false, icon: 'description', index: ['dateModify', 'status', 'sync', 'Nam', 'keyWord', '_id', 'MaDV', 'MaKH', 'TenKhachHang', 'SoTK', 'NganHang', 'Tinh', 'Email', 'MaSoThue', 'DaiDien', 'ChucVu'] },
        //  { label: 'Uỷ nhiệm chi', link: 'dien-luc/unc-phieu', api: 'unc-phieu', guest: false, icon: 'description' , index: [ ]},
      ]
    },
  ]
