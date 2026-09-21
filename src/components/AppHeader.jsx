import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { tokens } from '../tokens';

/**
 * Reference: the top "Home" location control and notification icon.
 * `location`, `locationIcon`, and `notificationIcon` are editable because this project has no standalone icon assets.
 */
export function AppHeader({ location = 'Home', locationIcon = '⌄', notificationIcon = '🔔', onLocationPress, onNotificationPress }) {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: tokens.spacing.md }}>
      <Pressable accessibilityLabel={`Change location, currently ${location}`} accessibilityRole="button" onPress={onLocationPress} style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ color: tokens.colors.text, fontSize: tokens.typography.display, fontWeight: '700' }}>{location}</Text>
        <Text accessibilityElementsHidden style={{ fontSize: 28, marginLeft: tokens.spacing.sm }}>{locationIcon}</Text>
      </Pressable>
      <Pressable accessibilityLabel="Notifications" accessibilityRole="button" onPress={onNotificationPress} style={{ minHeight: 48, minWidth: 48, alignItems: 'center', justifyContent: 'center' }}>
        <Text accessibilityElementsHidden style={{ color: tokens.colors.text, fontSize: 36 }}>{notificationIcon}</Text>
      </Pressable>
    </View>
  );
}
