import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartItem } from '../data';

interface CartLineItemProps {
  item: CartItem;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export function CartLineItem({
  item,
  onIncrease,
  onDecrease,
}: CartLineItemProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.book.cover }} style={styles.cover} />
      <View style={styles.infoCol}>
        <Text style={styles.title} numberOfLines={1}>
          {item.book.title}
        </Text>
        <Text style={styles.author}>{item.book.author}</Text>
        <Text style={styles.unitPrice}>
          {item.book.price.toLocaleString()} đ
        </Text>
      </View>

      <View style={styles.actionCol}>
        <View style={styles.qtyControls}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onDecrease(item.id)}
          >
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyVal}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onIncrease(item.id)}
          >
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalItemPrice}>
          {(item.book.price * item.quantity).toLocaleString()} đ
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cover: {
    width: 60,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#F1F5F9',
  },
  infoCol: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  author: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  unitPrice: {
    fontSize: 13,
    color: '#4338CA',
    fontWeight: '600',
    marginTop: 6,
  },
  actionCol: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 70,
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  qtyBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  qtyBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
  },
  qtyVal: {
    paddingHorizontal: 6,
    fontSize: 13,
    fontWeight: '700',
  },
  totalItemPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#166534',
  },
});
