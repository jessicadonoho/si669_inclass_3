import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { tokens } from '../tokens';
import { SearchField } from './SearchField';

export const defaultNavigationItems = [
  { label: 'Home', icon: '⌂' }, { label: 'Browse', icon: '⌖' }, { label: 'Cart', icon: '🛒' }, { label: 'Account', icon: '♙' }
];

/**
 * Reference: floating bottom bar with icon links around its central Search control.
 * `items` and `activeLabel` are the editing points; the flex layout lets Search compress before icon links disappear.
 */
export function BottomNavigation({ activeLabel = 'Home', items = defaultNavigationItems, onItemPress, searchPlaceholder = 'Search' }) {
  const beforeSearch = items.slice(0, 2);
  const afterSearch = items.slice(2);
  const renderItem = (item) => (
    <Pressable key={item.label} accessibilityLabel={item.label} accessibilityRole="link" accessibilityState={{ selected: activeLabel === item.label }} onPress={() => onItemPress?.(item)} style={{ alignItems: 'center', backgroundColor: tokens.colors.surface, borderColor: tokens.colors.border, borderRadius: tokens.radii.pill, borderWidth: 1, height: 62, justifyContent: 'center', marginHorizontal: tokens.spacing.xs, width: 62 }}>
      <Text accessibilityElementsHidden style={{ color: activeLabel === item.label ? tokens.colors.text : tokens.colors.textMuted, fontSize: 30 }}>{item.icon}</Text>
    </Pressable>
  );
  return <View accessibilityRole="navigation" style={{ alignItems: 'center', backgroundColor: tokens.colors.background, borderTopColor: tokens.colors.border, borderTopWidth: 1, flexDirection: 'row', paddingVertical: tokens.spacing.sm }}>{beforeSearch.map(renderItem)}<View style={{ flex: 1, minWidth: 120 }}><SearchField placeholder={searchPlaceholder} /></View>{afterSearch.map(renderItem)}</View>;
}
