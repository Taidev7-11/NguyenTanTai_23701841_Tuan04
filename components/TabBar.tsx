import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type TabType = 'home' | 'category' | 'cart' | 'profile';

interface TabBarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  cartCount?: number;
}

export function TabBar({
  currentTab,
  onSelectTab,
  cartCount = 0,
}: TabBarProps) {
  const tabs: { key: TabType; label: string; icon: string }[] = [
    { key: 'home', label: 'Trang chủ', icon: '🏠' },
    { key: 'category', label: 'Danh mục', icon: '📑' },
    { key: 'cart', label: 'Giỏ hàng', icon: '🛒' },
    { key: 'profile', label: 'Tài khoản', icon: '👤' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => onSelectTab(tab.key)}
            activeOpacity={0.7}
          >
            <View style={styles.iconWrap}>
              <Text style={styles.icon}>{tab.icon}</Text>
              {tab.key === 'cart' && cartCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartCount}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 62,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    position: 'relative',
    width: 32,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  label: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '500',
  },
  activeLabel: {
    color: '#4338CA',
    fontWeight: '700',
  },
});
