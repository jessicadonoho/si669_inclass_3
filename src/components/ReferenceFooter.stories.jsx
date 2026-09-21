import { ReferenceFooter } from './ReferenceFooter';

// Reference: separate dark Mobbin attribution strip, intentionally distinct from app navigation.
const meta = { title: 'Footers/ReferenceFooter', component: ReferenceFooter, args: { brand: 'Uber Eats', attribution: 'curated by Mobbin' }, argTypes: { brand: { control: 'text' }, attribution: { control: 'text' } } };
export default meta;
export const Default = {};
