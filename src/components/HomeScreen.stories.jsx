import React from 'react';
import { ScrollView, View } from 'react-native';
import { AppHeader } from './AppHeader';
import { BottomNavigation } from './BottomNavigation';
import { CategoryMenu } from './CategoryMenu';
import { FilterChip } from './FilterChip';
import { SectionHeader } from './SectionHeader';
import { tokens } from '../tokens';

/**
 * Reference: reusable composition of the supplied Uber Eats home-screen screenshot.
 * The page uses its child components rather than reproducing the screenshot as one fixed image; update the child stories for individual visual controls.
 */
function HomeScreen({ location, featuredTitle, topTenTitle }) {
  return (
    <View style={{ backgroundColor: tokens.colors.background, maxWidth: 640, width: '100%' }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: tokens.spacing.lg, paddingBottom: 92 }}>
        <AppHeader location={location} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingTop: tokens.spacing.sm }}>
          <FilterChip icon="🛍" label="All" selected />
          <FilterChip icon="🍌" label="Grocery" />
          <FilterChip icon="🥫" label="Convenience" />
        </ScrollView>
        <CategoryMenu />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterChip icon="◉" label="Uber One" />
          <FilterChip icon="♧" label="Pickup" />
          <FilterChip icon="◇" label="Offers" />
        </ScrollView>
        <SectionHeader title={featuredTitle} />
        <SectionHeader subtitle="Most ordered this week" title={topTenTitle} />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

// The source image has food photography only as a flattened screenshot, so this composition deliberately leaves photo cards to future supplied image assets.
const meta = {
  title: 'Screens/HomeScreen composition',
  component: HomeScreen,
  args: { location: 'Home', featuredTitle: 'Featured on Uber Eats', topTenTitle: 'Top 10 Fast Food spots' },
  argTypes: { location: { control: 'text' }, featuredTitle: { control: 'text' }, topTenTitle: { control: 'text' } }
};
export default meta;
export const Default = {};
