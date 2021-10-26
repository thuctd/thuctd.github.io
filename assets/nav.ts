export const NAV =
  [
    {
   label: 'Admin', link: 'admin', dbName: 'admin', indexKey: [], dbVer: 1, global: false, icon: 'security',
   sub: [
     { label: 'Người dùng', link: 'admin/user', api: 'user', guest: false, icon: 'manage_accounts'},
     { label: 'catalog', link: 'admin/catalog', api: 'admin', guest: false, icon: 'catalog'},
     { label: 'Nhật ký', link: 'admin/log', api: 'log' , guest: false, icon: 'receipt_long'},
     { label: 'Crypt', link: 'admin/crypt', api: 'admin', guest: false, icon:'admin_panel_settings' },
   ]
 },
 {
   label: 'OLI', link: 'xang-dau', dbName: 'xang-dau', indexKey: [], dbVer: 3, global: false, guest: false, icon: 'local_gas_station',
   sub: [
     { label: 'Danh bạ', link: 'xang-dau/danh-ba', api: 'xd-danh-ba', guest: false, icon: 'contact_page'},
     { label: 'Cước Vận chuyển', link: 'xang-dau/xd-cuoc-van-chuyen', api: 'xd-cuoc-van-chuyen',  guest: false, icon: 'commute' },
     { label: 'Mua bán', link: 'xang-dau/mua-ban', api: 'xd-mua-ban',  guest: false, icon: 'inventory' },
     { label: 'Nhân vên giao hàng', link: 'xang-dau/giao-hang', api: 'xd-giao-hang',  guest: false, icon: 'local_shipping' },
   ]
 },
 {
   label: 'Thibidi', link: 'thibidi', dbName: 'thibidi', indexKey: [], dbVer: 1, global: true, guest: false, icon: 'flash_auto',
   sub: [
     { label: 'Tài khoản', link: 'thibidi/dang-nhap', api: 'tbd-login', guest: false, icon: 'login'},
     { label: 'Khách hàng', link: 'thibidi/khach-hang', api: 'tbd-customer', guest: false, icon: 'groups'},
     { label: 'Thiết bị', link: 'thibidi/tsvh', api: 'tbd-tsvh', guest: false, icon: 'offline_bolt'},
   ]
 },
 {
   label: 'Nhân sự', link: 'nhansu', dbName: 'nhansu', indexKey: [], dbVer: 1, global: true, guest: false, icon: 'person',
   sub: [
     { label: 'Danh sách', link: 'nhansu/nhan-su', api: 'nhan-su', guest: false, icon: 'person' },
     { label: 'Thu nhập', link: 'nhansu/thu-nhap', api: 'thu-nhap', guest: false, icon: 'paid'},
   ]
 },
 {
   label: 'Khen thưởng', link: 'khen-thuong', dbName: 'khen-thuong', indexKey: [], dbVer: 1, global: true, guest: false, icon: 'stars',
   sub: [
     {label: 'Danh sách', link: 'khen-thuong/danh-sach', api: 'khen-thuong' , guest: false, icon: 'emoji_events'},
     {label: 'Phong trào thi đua', link: 'khen-thuong/phong-trao', api: 'phong-trao', guest: false, icon: 'star_rate'},
   ]
 },
 {
   label: 'Đào tạo', link: 'dao-tao', dbName: 'dao-tao', indexKey: [], dbVer: 1, global: false, guest: false, icon: 'history_edu',
   sub: [
     { label: 'Danh sách', link: 'dao-tao/danh-sach', api: 'dao-tao' },
   ]
 },
 {
   label: 'Email', link: 'email', dbName: 'email', indexKey: [], dbVer: 1, global: false, guest: false, icon: 'forward_to_inbox',
   sub: [
     { label: 'Tiền lương', link: 'email/tien-luong', api: 'tien-luong', guest: false, icon: 'email'},
     { label: 'Thông báo', link: 'email/thong-bao', api: 'thong-bao', guest: false, icon: 'attach_email' },
     { label: 'Điện mặt trời', link: 'email/dien-mat-troi', api: 'dien-mat-troi', guest: false, icon: 'mail_outline' },
   ]
 },
 {
   label: 'QLVH', link: 'qlvh', dbName: 'qlvh', indexKey: [], dbVer: 1, global: false, guest: false, icon:'offline_bolt',
   sub: [
     { label: 'Trạm biến áp', link: 'qlvh/tba', api: 'tba' , guest: false, icon: 'precision_manufacturing' },
     { label: 'Đường dây', link: 'qlvh/dz', api: 'dz' , guest: false, icon: 'linear_scale' },
     { label: 'Tọa độ', link: 'qlvh/toa-do', api: 'toa-do', guest: false, icon: 'location_on' },
   ]
 },
 {
   label: 'Trắc nghiệm', link: 'trac-nghiem', dbName: 'trac-nghiem', indexKey: ['Nhom', 'PhanLoai'], dbVer: 1, global: true, guest: false, icon: 'quiz',
   sub: [
     { label: 'Quản lý câu hỏi', link: 'trac-nghiem/quan-ly', api: 'trac-nghiem', guest: false, icon: 'quiz' },
     { label: 'Trắc nghiệm', link: 'trac-nghiem', api: 'quiz', guest: true, icon: 'quiz'},
     { label: 'Elearning', link: 'trac-nghiem/elearning', api: 'elearning', guest: false, icon: 'quiz'},
   ]
 },
 {
   label: 'Bán hàng', link: 'ban-hang', dbName: 'ban-hang', indexKey: [], dbVer: 3, global: false, guest: false, icon: 'paid',
   sub: [
     { label: 'Quản lý hàng hóa', link: 'ban-hang/hang-hoa', api: 'hang-hoa', guest: false, icon: 'category'},
     { label: 'Dịch vụ ăn uống', link: 'ban-hang/an-uong', api: 'an-uong', guest: false, icon: 'emoji_food_beverage'},
     { label: 'Dịch vụ bán lẻ', link: 'ban-hang/tap-hoa', api: 'tap-hoa', guest: false, icon: 'shopping_cart'},
     { label: 'Pha chế', link: 'ban-hang/pha-che', api: 'pha-che', guest: false, icon: 'coffee_maker'},
     { label: 'Báo cáo doanh thu', link: 'ban-hang/bao-cao', api: 'bao-cao', guest: false, icon: 'insights'},
     { label: 'Quản lý Khách hàng', link: 'ban-hang/khach-hang', api: 'khach-hang', guest: false, icon: 'supervisor_account'},
     { label: 'Nhà cung cấp', link: 'ban-hang/nha-cung-cap', api: 'nha-cung-cap' , },
     { label: 'Phiếu xuất', link: 'ban-hang/xuat-hang', api: 'xuat-hang' },
     { label: 'Phiếu nhập', link: 'ban-hang/nhap-hang', api: 'nhap-hang' },
   ]
 },
 {
   label: '', link: '', dbName: 'user', indexKey: [], dbVer: 1, global: false,
   sub: [
     { label: 'Công nợ   thu Chi', link: 'user/thu-chi', api: 'thu-chi', guest: false, icon: 'attach_money' },
     { label: 'Cài đặt', link: 'taikhoan/cau-hinh', api: 'cau-hinh' , guest: false, icon: 'settings'},
   ]
 },
 {
   label: '', link: '', dbName: '4la', indexKey: [], dbVer: 1, global: true,
   sub: [
     { label: '', link: '', api: 'catalog', guest: false, icon: 'category'},
   ]
 },
 {
   label: 'Tiện ích', link: 'tienich', dbName: 'app', indexKey: [], dbVer: 1, global: true, guest: false, icon: 'construction',
   sub: [
     { label: 'Office 3.0', link: 'tienich/office', api: 'office', guest: false, icon: 'description' },
     { label: 'Barcode Generate', link: 'tienich/barcode-generate', api: 'barcode', guest: false, icon: 'qr_code_scanner'},
     { label: 'Đặt tên file', link: 'tienich/ten-file', api: 'ten-file', guest: false, icon: 'insert_drive_file' },
     { label: 'Nhật ký tiếp xúc', link: 'covid/tiep-xuc', api: 'tiep-xuc', guest: false, icon: 'coronavirus' },
     { label: 'Merge', link: 'tienich/merge', api: 'merge', guest: false, icon: 'history_edu' },
     { label: 'Điều Phối', link: 'tienich/dieu-phoi', api: 'dieu-phoi', guest: false, icon: 'history_edu' },
   ]
 }
]
