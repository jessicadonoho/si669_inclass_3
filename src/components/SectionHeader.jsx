import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { tokens } from '../tokens';

/** Reference: "Featured on Uber Eats" and "Top 10 Fast Food spots" headers with a circular forward action. */
export function SectionHeader({ onPress, subtitle, title = 'Featured on Uber Eats' }) {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: tokens.spacing.xxl, paddingBottom: tokens.spacing.md }}>
      <View style={{ flex: 1, paddingRight: tokens.spacing.md }}>
        <Text style={{ color: tokens.colors.text, fontSize: tokens.typography.heading, fontWeight: '800' }}>{title}</Text>
        {subtitle ? <Text style={{ color: tokens.colors.textMuted, fontSize: 20, marginTop: tokens.spacing.xs }}>{subtitle}</Text> : null}
      </View>
      <Pressable accessibilityLabel={`View more ${title}`} accessibilityRole="button" onPress={onPress} style={{ alignItems: 'center', backgroundColor: tokens.colors.surfaceMuted, borderRadius: tokens.radii.pill, height: 56, justifyContent: 'center', width: 56 }}>
        <Text accessibilityElementsHidden style={{ fontSize: 32 }}>→</Text>
      </Pressable>
    </View>
  );
}
