import React from 'react';
import { View } from 'react-native';
import { tokens } from '../src/tokens';

const preview = {
  decorators: [
    (Story) => (
      <View style={{ minHeight: '100vh', padding: tokens.spacing.lg, backgroundColor: tokens.colors.background }}>
        <Story />
      </View>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: tokens.colors.background },
        { name: 'Surface', value: tokens.colors.surface },
        { name: 'Dark', value: tokens.colors.text }
      ]
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
    viewport: {
      viewports: {
        phone: { name: 'Phone', styles: { width: '375px', height: '667px' }, type: 'mobile' },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' }, type: 'tablet' }
      }
    }
  }
};

export default preview;
