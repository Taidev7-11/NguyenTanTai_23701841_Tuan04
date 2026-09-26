import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartLineItem } from '../components/CartLineItem';
import { CartItem } from '../data';

interface CartScreenProps {
  items: CartItem[];
  onCheckout: () => void;
}

export function CartScreen({ items, onCheckout }: CartScreenProps) {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Giỏ hàng ({items.length})</Text>
      </View>

      <ScrollView
        style={styles.itemList}
        contentContainerStyle={styles.listContent}
      >
        {items.map((cartItem) => (
          <CartLineItem key={cartItem.id} item={cartItem} />
        ))}
      </ScrollView>

      <View style={styles.checkoutBar}>
        <View>
          <Text style={styles.totalLabel}>Tổng thanh toán:</Text>
          <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
        </View>
        <TouchableOpacity style={styles.payBtn} onPress={onCheckout}>
          <Text style={styles.payText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    height: 50,
    backgroundColor: '#1E1B4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  itemList: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  checkoutBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  totalLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#DC2626',
  },
  payBtn: {
    backgroundColor: '#166534',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 6,
  },
  payText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
