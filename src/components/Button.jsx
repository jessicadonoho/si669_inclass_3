import React from 'react';
import { Pressable, Text } from 'react-native';
import { tokens } from '../tokens';

/** A compact, cross-platform button used to demonstrate the component setup. */
export function Button({ children, disabled = false, onPress, style, ...props }) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          alignItems: 'center', alignSelf: 'flex-start',
          backgroundColor: disabled ? '#94a3b8' : pressed ? tokens.colors.primaryPressed : tokens.colors.primary,
          borderRadius: tokens.radii.md, paddingHorizontal: tokens.spacing.lg, paddingVertical: tokens.spacing.md
        },
        style
      ]}
      {...props}
    >
      <Text style={{ color: tokens.colors.onPrimary, fontWeight: '600' }}>{children}</Text>
    </Pressable>
  );
}
