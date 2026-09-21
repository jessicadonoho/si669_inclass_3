/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  framework: '@storybook/react-vite',
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  docs: { autodocs: true },
  async viteFinal(viteConfig) {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias || {}),
      'react-native': 'react-native-web'
    };
    viteConfig.define = { ...(viteConfig.define || {}), global: 'globalThis' };
    viteConfig.base = process.env.STORYBOOK_BASE_PATH || viteConfig.base || '/';
    return viteConfig;
  }
};

export default config;
