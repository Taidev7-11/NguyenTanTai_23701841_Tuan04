import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CartItem } from '../data';

export function CartLineItem({ item }: { item: CartItem }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.book.cover }} style={styles.cover} />
      <View style={styles.infoCol}>
        <Text style={styles.title} numberOfLines={2}>
          {item.book.title}
        </Text>
        <Text style={styles.author}>{item.book.author}</Text>
        <Text style={styles.quantity}>SL: {item.quantity}</Text>
      </View>
      <View style={styles.priceCol}>
        <Text style={styles.price}>
          {(item.book.price * item.quantity).toLocaleString()} đ
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
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
    fontWeight: '600',
    color: '#0F172A',
  },
  author: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  quantity: {
    fontSize: 12,
    color: '#4338CA',
    marginTop: 6,
    fontWeight: '600',
  },
  priceCol: {
    width: 90,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#166534',
  },
});
