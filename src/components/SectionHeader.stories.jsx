import { SectionHeader } from './SectionHeader';

// Reference: title variants above the featured and top-ten content rows.
const meta = { title: 'Headers/SectionHeader', component: SectionHeader, args: { title: 'Featured on Uber Eats' }, argTypes: { title: { control: 'text' }, subtitle: { control: 'text' } } };
export default meta;
export const Featured = {};
export const WithSubtitle = { args: { title: 'Top 10 Fast Food spots', subtitle: 'Most ordered this week' } };
