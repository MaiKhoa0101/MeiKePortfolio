export interface Order {
  id: string;
  name: string;
  phone: string;
  email: string;
  orderTime: string;
  orderItem: string;
  customerRequest: string;
}

export const ORDERS_MOCK: Order[] = [
  {
    id: "ORD-240901",
    name: "Nguyễn Văn A",
    phone: "0987 654 321",
    email: "nguyen.van.a@example.com",
    orderTime: "2025-08-14 09:15",
    orderItem: "Gói WebApp VIP ",
    customerRequest: "Liên hệ trước khi giao",
  },
  {
    id: "ORD-240902",
    name: "Trần Thị B",
    phone: "0912 345 678",
    email: "tran.thi.b@mail.vn",
    orderTime: "2025-08-14 10:30",
    orderItem: "Gói Web Plus",
    customerRequest: "Giao giờ hành chính",
  },
  {
    id: "ORD-240903",
    name: "Lê Minh C",
    phone: "0905 111 222",
    email: "le.minh.c@ezlife.app",
    orderTime: "2025-08-13 16:45",
    orderItem: "Gói Web Basic ",
    customerRequest: "Thanh toán chuyển khoản",
  },
  {
    id: "ORD-240904",
    name: "Phạm Thu D",
    phone: "0934 555 888",
    email: "pham.thu.d@example.com",
    orderTime: "2025-08-12 14:20",
    orderItem: "Gói Web App Plus",
    customerRequest: "Gửi báo giá chi tiết",
  },
  {
    id: "ORD-240905",
    name: "Hoàng Anh E",
    phone: "0978 333 444",
    email: "hoang.anh.e@mail.vn",
    orderTime: "2025-08-11 11:10",
    orderItem: "Gói Web Plus",
    customerRequest: "Hỗ trợ cài đặt tại chỗ",
  },
  {
    id: "ORD-240906",
    name: "Đỗ Quang F",
    phone: "0968 222 111",
    email: "do.quang.f@example.com",
    orderTime: "2025-08-10 15:05",
    orderItem: "Gói App Basic",
    customerRequest: "Cần xuất hóa đơn",
  },
  {
    id: "ORD-240907",
    name: "Võ Hồng G",
    phone: "0923 888 777",
    email: "vo.hong.g@mail.vn",
    orderTime: "2025-08-10 09:40",
    orderItem: "Gói Web VIP",
    customerRequest: "Trao đổi qua Zoom",
  },
  {
    id: "ORD-240908",
    name: "Bùi Khánh H",
    phone: "0945 777 666",
    email: "bui.khanh.h@ezlife.app",
    orderTime: "2025-08-09 13:25",
    orderItem: "Gói App Plus",
    customerRequest: "Hẹn demo tính năng",
  },
  {
    id: "ORD-240909",
    name: "Dương Hải I",
    phone: "0903 222 555",
    email: "duong.hai.i@example.com",
    orderTime: "2025-08-08 08:55",
    orderItem: "Gói App  Basic",
    customerRequest: "Giao trong tuần này",
  },
  {
    id: "ORD-240910",
    name: "Lý Gia K",
    phone: "0911 666 333",
    email: "ly.gia.k@mail.vn",
    orderTime: "2025-08-07 17:10",
    orderItem: "Triển khai Website",
    customerRequest: "Ưu tiên UI theo brand",
  },
  {
    id: "ORD-240911",
    name: "Phan Bảo L",
    phone: "0986 555 111",
    email: "phan.bao.l@example.com",
    orderTime: "2025-08-06 10:45",
    orderItem: "Gói Basic (6 tháng)",
    customerRequest: "Hỗ trợ import dữ liệu",
  },
  {
    id: "ORD-240912",
    name: "Tạ Ngọc M",
    phone: "0933 444 222",
    email: "ta.ngoc.m@mail.vn",
    orderTime: "2025-08-05 15:30",
    orderItem: "Gói WebApp VIP ",
    customerRequest: "Sớm kích hoạt tài khoản",
  },
];
