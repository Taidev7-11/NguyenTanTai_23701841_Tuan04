export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
  discountPercent?: number;
  isNew?: boolean;
  description?: string;
}

export interface CartItem {
  id: number;
  book: Book;
  quantity: number;
}

export const CATEGORIES: string[] = [
  'Tất cả',
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử',
  'Kỹ năng sống',
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Dế Mèn Phiêu Lưu Ký',
    author: 'Tô Hoài',
    price: 65000,
    cover:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
    discountPercent: 20,
    description:
      'Tác phẩm văn học thiếu nhi kinh điển của nhà văn Tô Hoài kể về chuyến phiêu lưu tự lập đầy thử thách và bài học nhân sinh của chàng Dế Mèn.',
  },
  {
    id: 2,
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: 79000,
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    isNew: true,
    description:
      'Câu chuyện ngụ ngôn triết học về Santiago, một chàng trai chăn cừu Tây Ban Nha dám theo đuổi Giấc mơ cuộc đời và Kho báu cá nhân.',
  },
  {
    id: 3,
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    price: 86000,
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
    discountPercent: 15,
    description:
      'Cuốn sách nghệ thuật thu phục lòng người bán chạy nhất mọi thời đại, hướng dẫn các nguyên tắc giao tiếp và đối nhân xử thế căn bản.',
  },
  {
    id: 4,
    title: 'Mắt Biếc',
    author: 'Nguyễn Nhật Ánh',
    price: 110000,
    cover:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
    description:
      'Mối tình đơn phương tha thiết nhưng buồn day dứt của Ngạn dành cho cô bạn thanh mai trúc mã Hà Lan ở làng Đo Đo bình dị.',
  },
];

export const CART_DATA: CartItem[] = [
  { id: 1, book: BOOKS[0], quantity: 1 },
  { id: 2, book: BOOKS[1], quantity: 2 },
  { id: 3, book: BOOKS[2], quantity: 1 },
];
