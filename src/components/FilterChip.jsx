import React from 'react';
import { Pressable, Text } from 'react-native';
import { tokens } from '../tokens';

/** Reference: the All, Grocery, Uber One, Pickup, and Offers selectable pills. */
export function FilterChip({ icon, label = 'All', onPress, selected = false }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected }} onPress={onPress} style={{ alignItems: 'center', backgroundColor: selected ? '#ebe9ed' : tokens.colors.surfaceMuted, borderColor: selected ? 'transparent' : tokens.colors.border, borderRadius: tokens.radii.pill, borderWidth: 1, flexDirection: 'row', minHeight: 54, paddingHorizontal: tokens.spacing.lg, marginRight: tokens.spacing.sm }}>
      {icon ? <Text accessibilityElementsHidden style={{ fontSize: 25, marginRight: tokens.spacing.sm }}>{icon}</Text> : null}
      <Text style={{ color: tokens.colors.text, fontSize: 20, fontWeight: selected ? '700' : '500' }}>{label}</Text>
    </Pressable>
  );
}
