export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
  category: string;
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
  'Kỹ năng sống',
  'Truyện tranh',
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Dế Mèn Phiêu Lưu Ký',
    author: 'Tô Hoài',
    price: 65000,
    cover:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
    category: 'Văn học',
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
    category: 'Văn học',
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
    category: 'Kỹ năng sống',
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
    category: 'Văn học',
    description:
      'Mối tình đơn phương tha thiết nhưng buồn day dứt của Ngạn dành cho cô bạn thanh mai trúc mã Hà Lan ở làng Đo Đo bình dị.',
  },
  {
    id: 5,
    title: 'Doraemon Tuyển Tập',
    author: 'Fujiko F. Fujio',
    price: 45000,
    cover:
      'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=400&q=80',
    category: 'Truyện tranh',
    discountPercent: 10,
    description:
      'Những bảo bối thần kỳ của chú mèo máy Doraemon và nhóm bạn Nobita mang lại tiếng cười và bài học ý nghĩa.',
  },
  {
    id: 6,
    title: 'Tư Duy Nhanh Và Chậm',
    author: 'Daniel Kahneman',
    price: 155000,
    cover:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    category: 'Kinh tế',
    isNew: true,
    description:
      'Cuốn sách kinh điển về kinh tế học hành vi và hai hệ thống tư duy chi phối quyết định của con người.',
  },
];

export const CART_DATA: CartItem[] = [
  { id: 1, book: BOOKS[0], quantity: 1 },
  { id: 2, book: BOOKS[1], quantity: 2 },
];
