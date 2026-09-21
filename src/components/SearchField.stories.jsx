import { SearchField } from './SearchField';

// Reference: editable text input embedded in the floating navigation bar.
const meta = {
  title: 'Forms/SearchField',
  component: SearchField,
  args: { placeholder: 'Search', icon: '⌕' },
  argTypes: { placeholder: { control: 'text' }, icon: { control: 'text' }, value: { control: 'text' } }
};
export default meta;
export const Empty = {};
export const WithQuery = { args: { value: 'Pizza' } };
