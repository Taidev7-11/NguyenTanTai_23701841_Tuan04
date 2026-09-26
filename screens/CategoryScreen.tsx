import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { BookGrid } from '../components/BookGrid';
import { BOOKS, CATEGORIES } from '../data';

export function CategoryScreen({
  onSelectBook,
}: {
  onSelectBook: (id: number) => void;
}) {
  const [selectedCat, setSelectedCat] = useState('Tất cả');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Phân loại sách</Text>
      </View>

      {/* Thanh chọn thể loại cuộn ngang */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catScroll}
      >
        {CATEGORIES.map((cat) => {
          const active = cat === selectedCat;
          return (
            <TouchableOpacity
              key={cat}
              style={[styles.catChip, active && styles.catChipActive]}
              onPress={() => setSelectedCat(cat)}
            >
              <Text
                style={[styles.catChipText, active && styles.catChipTextActive]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Lưới sách theo thể loại */}
      <ScrollView contentContainerStyle={styles.bookList}>
        <Text style={styles.sectionTitle}>Chủ đề: {selectedCat}</Text>
        <BookGrid books={BOOKS} onPressBook={onSelectBook} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    height: 54,
    backgroundColor: '#1E1B4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  catScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
    height: 36,
    justifyContent: 'center',
  },
  catChipActive: {
    backgroundColor: '#4338CA',
  },
  catChipText: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '600',
  },
  catChipTextActive: {
    color: '#FFFFFF',
  },
  bookList: {
    padding: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
  },
});
