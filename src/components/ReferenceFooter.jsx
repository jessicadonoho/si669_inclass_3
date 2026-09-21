import React from 'react';
import { Text, View } from 'react-native';
import { tokens } from '../tokens';

/**
 * Reference: dark attribution strip at the bottom of the supplied screenshot.
 * This is intentionally separate from `BottomNavigation`: it is reference attribution, not app navigation. Replace labels only with approved branding.
 */
export function ReferenceFooter({ brand = 'Uber Eats', attribution = 'curated by Mobbin' }) {
  return <View style={{ alignItems: 'center', backgroundColor: tokens.colors.footer, flexDirection: 'row', justifyContent: 'space-between', padding: tokens.spacing.lg }}><View style={{ alignItems: 'center', flexDirection: 'row' }}><View style={{ backgroundColor: tokens.colors.primary, borderRadius: tokens.radii.md, padding: tokens.spacing.sm }}><Text style={{ fontSize: 12, fontWeight: '700' }}>Uber{`\n`}Eats</Text></View><Text style={{ color: tokens.colors.surface, fontSize: 20, fontWeight: '700', marginLeft: tokens.spacing.md }}>{brand}</Text></View><Text style={{ color: tokens.colors.surface, fontSize: 16, fontWeight: '700' }}>{attribution}</Text></View>;
}
