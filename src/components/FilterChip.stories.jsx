import { FilterChip } from './FilterChip';

// Reference: selected All and unselected benefit filters below the category row.
const meta = {
  title: 'Menus/FilterChip', component: FilterChip,
  args: { label: 'All', icon: '🛍', selected: false },
  argTypes: { label: { control: 'text' }, icon: { control: 'text' }, selected: { control: 'boolean' } }
};
export default meta;
export const Default = {};
export const Selected = { args: { selected: true } };
export const Benefit = { args: { label: 'Uber One', icon: '◉' } };
