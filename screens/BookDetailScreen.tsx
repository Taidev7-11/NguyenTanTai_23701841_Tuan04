import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Book } from '../data';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
  onAddToCart: () => void;
}

export function BookDetailScreen({
  book,
  onBack,
  onAddToCart,
}: BookDetailProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backText}>← Quay lại</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{ uri: book.cover }} style={styles.bigCover} />
      </View>

      <ScrollView
        style={styles.scrollInfo}
        contentContainerStyle={styles.infoContent}
      >
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Tác giả: {book.author}</Text>
        <View style={styles.priceTag}>
          <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
        </View>
        <Text style={styles.descHeading}>Giới thiệu nội dung:</Text>
        <Text style={styles.description}>
          {book.description ||
            'Cuốn sách này hiện đang được nhiều độc giả yêu thích và đón nhận nhờ vào cách hành văn lôi cuốn cùng những bài học trải nghiệm quý giá...'}
        </Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>Giá bán lẻ</Text>
          <Text style={styles.bottomPrice}>
            {book.price.toLocaleString()} đ
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={onAddToCart}>
          <Text style={styles.addBtnText}>+ Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    padding: 12,
  },
  backText: {
    fontSize: 16,
    color: '#4338CA',
    fontWeight: '600',
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F8FAFC',
  },
  bigCover: {
    width: '45%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
    alignSelf: 'center',
  },
  scrollInfo: {
    flex: 1,
  },
  infoContent: {
    padding: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  author: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  priceTag: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: '#DCFCE7',
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#166534',
  },
  descHeading: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#334155',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  bottomLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  bottomPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E1B4B',
  },
  addBtn: {
    backgroundColor: '#4338CA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
