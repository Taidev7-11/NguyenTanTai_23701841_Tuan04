import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  View,
  Text,
} from 'react-native';
import { TabBar, TabType } from './components/TabBar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { BOOKS, CART_DATA, Book, CartItem } from './data';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_DATA);

  const handleSelectBook = (id: number) => {
    const book = BOOKS.find((b) => b.id === id);
    if (book) setSelectedBook(book);
  };

  const handleAddToCart = () => {
    if (!selectedBook) return;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === selectedBook.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === selectedBook.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: Date.now(), book: selectedBook, quantity: 1 }];
    });
    Alert.alert('Thành công', `Đã thêm "${selectedBook.title}" vào giỏ!`);
    setSelectedBook(null);
  };

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor='#1E1B4B' />

      {selectedBook ? (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <>
          <View style={styles.main}>
            {currentTab === 'home' && (
              <HomeScreen
                onSelectBook={handleSelectBook}
                onOpenCart={() => setCurrentTab('cart')}
                cartCount={totalCartCount}
              />
            )}

            {currentTab === 'category' && (
              <CategoryScreen onSelectBook={handleSelectBook} />
            )}

            {currentTab === 'cart' && (
              <CartScreen
                items={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onCheckout={() =>
                  Alert.alert('Thông báo', 'Xác nhận đặt hàng thành công!')
                }
              />
            )}

            {currentTab === 'profile' && (
              <View style={styles.profileContainer}>
                <Text style={styles.profileAvatar}>👤</Text>
                <Text style={styles.profileName}>Nguyễn Tấn Tài</Text>
                <Text style={styles.profileId}>MSSV: 23701841</Text>
                <Text style={styles.profileCourse}>
                  Lập trình ứng dụng Thiết bị di động
                </Text>
              </View>
            )}
          </View>

          {/* TabBar cố định ở đáy */}
          <TabBar
            currentTab={currentTab}
            onSelectTab={setCurrentTab}
            cartCount={totalCartCount}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1B4B',
  },
  main: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileAvatar: {
    fontSize: 70,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  profileId: {
    fontSize: 15,
    color: '#4338CA',
    fontWeight: '600',
    marginTop: 4,
  },
  profileCourse: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
  },
});
