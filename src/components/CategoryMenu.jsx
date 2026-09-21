import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { tokens } from '../tokens';

export const defaultCategories = [
  { label: 'Dine Out', icon: '🍽️' }, { label: 'Pizza', icon: '🍕' }, { label: 'Sushi', icon: '🍣' },
  { label: 'Thai', icon: '🍜' }, { label: 'Chinese', icon: '🥡' }
];

/**
 * Reference: horizontal row of illustrated food categories below the primary menu.
 * A horizontal ScrollView keeps touch targets readable when the available viewport is narrower than the reference.
 */
export function CategoryMenu({ categories = defaultCategories, onCategoryPress }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: tokens.spacing.xl }}>
      {categories.map((category) => (
        <Pressable key={category.label} accessibilityLabel={category.label} accessibilityRole="button" onPress={() => onCategoryPress?.(category)} style={{ alignItems: 'center', marginRight: tokens.spacing.xl, minWidth: 88 }}>
          <View style={{ alignItems: 'center', height: 94, justifyContent: 'center' }}>
            <Text accessibilityElementsHidden style={{ fontSize: 66 }}>{category.icon}</Text>
          </View>
          <Text style={{ color: tokens.colors.text, fontSize: tokens.typography.body, fontWeight: '500', marginTop: tokens.spacing.sm }}>{category.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
