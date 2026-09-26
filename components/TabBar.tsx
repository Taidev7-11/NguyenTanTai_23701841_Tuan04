import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type TabType = 'home' | 'category' | 'cart' | 'profile';

interface TabBarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export function TabBar({ currentTab, onSelectTab }: TabBarProps) {
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
            <Text style={styles.icon}>{tab.icon}</Text>
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
    height: 60,
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
  icon: {
    fontSize: 20,
    marginBottom: 2,
  },
  label: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#4338CA',
    fontWeight: '700',
  },
});
