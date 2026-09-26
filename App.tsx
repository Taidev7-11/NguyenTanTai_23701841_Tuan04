import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Alert } from 'react-native';
import { TabBar, TabType } from './components/TabBar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
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
          {currentTab === 'home' && (
            <HomeScreen
              onSelectBook={handleSelectBook}
              onOpenCart={() => setCurrentTab('cart')}
              cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            />
          )}

          {currentTab === 'cart' && (
            <CartScreen
              items={cartItems}
              onCheckout={() =>
                Alert.alert('Thông báo', 'Chức năng thanh toán')
              }
            />
          )}

          <TabBar currentTab={currentTab} onSelectTab={setCurrentTab} />
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
});
