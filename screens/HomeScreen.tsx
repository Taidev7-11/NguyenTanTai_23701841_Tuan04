import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { FloatingCartButton } from '../components/FloatingCartButton';
import { BOOKS } from '../data';

interface HomeScreenProps {
  onSelectBook: (id: number) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export function HomeScreen({
  onSelectBook,
  onOpenCart,
  cartCount,
}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips />
        <View style={styles.gridWrap}>
          <BookGrid books={BOOKS} onPressBook={onSelectBook} />
        </View>
      </ScrollView>
      <FloatingCartButton count={cartCount} onPress={onOpenCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 90,
  },
  gridWrap: {
    marginTop: 16,
  },
});
