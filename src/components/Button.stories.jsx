import { Button } from './Button';

// Reference: the circular arrow actions and high-contrast controls in the supplied home screen.
const meta = {
  title: 'Forms/Button',
  component: Button,
  args: { children: 'Continue', variant: 'primary', disabled: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'surface', 'icon'] },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  }
};
export default meta;
export const Default = {};
export const Surface = { args: { children: 'Browse', variant: 'surface' } };
export const IconOnly = { args: { children: undefined, icon: '→', variant: 'icon', accessibilityLabel: 'View more' } };
export const Disabled = { args: { disabled: true } };
