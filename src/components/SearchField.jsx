import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { tokens } from '../tokens';

/**
 * Reference: the pill-shaped Search control in the bottom navigation.
 * The field grows across available width on small screens; update `placeholder` and icon text through props.
 */
export function SearchField({ accessibilityLabel = 'Search restaurants and groceries', icon = '⌕', onChangeText, placeholder = 'Search', value }) {
  return (
    <View style={{ alignItems: 'center', backgroundColor: tokens.colors.surface, borderColor: tokens.colors.border, borderRadius: tokens.radii.pill, borderWidth: 1, flexDirection: 'row', minHeight: 56, paddingHorizontal: tokens.spacing.lg }}>
      <Text accessibilityElementsHidden style={{ color: tokens.colors.textMuted, fontSize: 30, marginRight: tokens.spacing.sm }}>{icon}</Text>
      <TextInput accessibilityLabel={accessibilityLabel} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={tokens.colors.textMuted} style={{ color: tokens.colors.text, flex: 1, fontSize: 22, paddingVertical: tokens.spacing.sm }} value={value} />
    </View>
  );
}
