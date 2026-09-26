import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { BookGrid } from '../components/BookGrid';
import { BOOKS, CATEGORIES } from '../data';

type PriceFilter = 'all' | 'under80' | 'over80';

export function CategoryScreen({
  onSelectBook,
}: {
  onSelectBook: (id: number) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [discountOnly, setDiscountOnly] = useState(false);
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');

  // Xử lý tìm kiếm và lọc dữ liệu đa điều kiện
  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      // 1. Lọc theo từ khóa tìm kiếm (tên sách hoặc tác giả)
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Lọc theo danh mục
      const matchesCat =
        selectedCat === 'Tất cả' || book.category === selectedCat;

      // 3. Lọc có khuyến mãi
      const matchesDiscount =
        !discountOnly || (book.discountPercent && book.discountPercent > 0);

      // 4. Lọc theo khoảng giá
      let matchesPrice = true;
      if (priceFilter === 'under80') {
        matchesPrice = book.price < 80000;
      } else if (priceFilter === 'over80') {
        matchesPrice = book.price >= 80000;
      }

      return matchesSearch && matchesCat && matchesDiscount && matchesPrice;
    });
  }, [searchQuery, selectedCat, discountOnly, priceFilter]);

  return (
    <View style={styles.container}>
      {/* 1. Header & Thanh tìm kiếm cố định */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Khám phá & Tìm kiếm</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder='Tìm theo tên sách hoặc tác giả...'
            placeholderTextColor='#94A3B8'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* 2. Thanh lọc danh mục thể loại (Cuộn ngang) */}
      <View style={styles.filterSection}>
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
                  style={[
                    styles.catChipText,
                    active && styles.catChipTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* 3. Hàng nút lọc phụ: Khuyến mãi & Mức giá */}
        <View style={styles.subFiltersRow}>
          <TouchableOpacity
            style={[styles.tagFilter, discountOnly && styles.tagFilterActive]}
            onPress={() => setDiscountOnly(!discountOnly)}
          >
            <Text
              style={[
                styles.tagFilterText,
                discountOnly && styles.tagFilterTextActive,
              ]}
            >
              🏷️ Có giảm giá
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tagFilter,
              priceFilter === 'under80' && styles.tagFilterActive,
            ]}
            onPress={() =>
              setPriceFilter(priceFilter === 'under80' ? 'all' : 'under80')
            }
          >
            <Text
              style={[
                styles.tagFilterText,
                priceFilter === 'under80' && styles.tagFilterTextActive,
              ]}
            >
              Dưới 80k
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tagFilter,
              priceFilter === 'over80' && styles.tagFilterActive,
            ]}
            onPress={() =>
              setPriceFilter(priceFilter === 'over80' ? 'all' : 'over80')
            }
          >
            <Text
              style={[
                styles.tagFilterText,
                priceFilter === 'over80' && styles.tagFilterTextActive,
              ]}
            >
              Từ 80k trở lên
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Vùng hiển thị kết quả cuộn được */}
      <ScrollView
        contentContainerStyle={styles.resultList}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.resultHeader}>
          <Text style={styles.resultCount}>
            Tìm thấy {filteredBooks.length} cuốn sách
          </Text>
          {(selectedCat !== 'Tất cả' ||
            discountOnly ||
            priceFilter !== 'all' ||
            searchQuery !== '') && (
            <TouchableOpacity
              onPress={() => {
                setSearchQuery('');
                setSelectedCat('Tất cả');
                setDiscountOnly(false);
                setPriceFilter('all');
              }}
            >
              <Text style={styles.resetBtn}>Xóa tất cả bộ lọc</Text>
            </TouchableOpacity>
          )}
        </View>

        {filteredBooks.length === 0 ? (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyIcon}>📖</Text>
            <Text style={styles.emptyText}>
              Không tìm thấy cuốn sách nào phù hợp tiêu chí.
            </Text>
          </View>
        ) : (
          <BookGrid books={filteredBooks} onPressBook={onSelectBook} />
        )}
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
    height: 52,
    backgroundColor: '#1E1B4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
  },
  clearIcon: {
    fontSize: 14,
    color: '#94A3B8',
    padding: 4,
  },
  filterSection: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingBottom: 8,
  },
  catScroll: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    gap: 8,
  },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  catChipActive: {
    backgroundColor: '#4338CA',
    borderColor: '#4338CA',
  },
  catChipText: {
    color: '#475569',
    fontSize: 12,
    fontWeight: '600',
  },
  catChipTextActive: {
    color: '#FFFFFF',
  },
  subFiltersRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 6,
    gap: 8,
  },
  tagFilter: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tagFilterActive: {
    backgroundColor: '#EEF2FF',
    borderColor: '#6366F1',
  },
  tagFilterText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  tagFilterTextActive: {
    color: '#4338CA',
    fontWeight: '700',
  },
  resultList: {
    padding: 16,
    paddingBottom: 90,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultCount: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  resetBtn: {
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '600',
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
});
