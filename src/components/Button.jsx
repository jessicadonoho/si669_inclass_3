import React from 'react';
import { Pressable, Text } from 'react-native';
import { tokens } from '../tokens';

/**
 * Reference: rounded controls and arrow buttons in `UI/Uber Eats iOS 39.png`.
 * Change `variant`, `children`, and `icon` to adapt this shared control; spacing and colors belong in tokens.
 */
export function Button({ children, disabled = false, icon, onPress, style, variant = 'primary', ...props }) {
  const isIcon = variant === 'icon';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={props.accessibilityLabel || (typeof children === 'string' ? children : undefined)}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          alignItems: 'center', alignSelf: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: disabled
            ? tokens.colors.border
            : variant === 'primary'
              ? pressed ? tokens.colors.primaryPressed : tokens.colors.primary
              : tokens.colors.surfaceMuted,
          borderRadius: isIcon ? tokens.radii.pill : tokens.radii.md,
          minHeight: isIcon ? 56 : 44,
          minWidth: isIcon ? 56 : undefined,
          paddingHorizontal: isIcon ? tokens.spacing.md : tokens.spacing.lg,
          paddingVertical: isIcon ? tokens.spacing.sm : tokens.spacing.md
        },
        style
      ]}
      {...props}
    >
      {icon ? <Text accessibilityElementsHidden style={{ fontSize: 22, marginRight: children ? tokens.spacing.sm : 0 }}>{icon}</Text> : null}
      {children ? <Text style={{ color: variant === 'primary' ? tokens.colors.onPrimary : tokens.colors.text, fontSize: tokens.typography.label, fontWeight: '700' }}>{children}</Text> : null}
    </Pressable>
  );
}
