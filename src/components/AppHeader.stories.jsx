import { AppHeader } from './AppHeader';

// Reference: top row of `UI/Uber Eats iOS 39.png`; use text glyphs until a shared icon set is supplied.
const meta = {
  title: 'Headers/AppHeader',
  component: AppHeader,
  args: { location: 'Home', locationIcon: '⌄', notificationIcon: '🔔' },
  argTypes: { location: { control: 'text' }, locationIcon: { control: 'text' }, notificationIcon: { control: 'text' } }
};
export default meta;
export const Default = {};
export const AlternateLocation = { args: { location: 'Downtown' } };
