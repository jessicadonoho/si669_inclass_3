import { BottomNavigation, defaultNavigationItems } from './BottomNavigation';

// Reference: Home is selected in the supplied icon-link bar; controls expose its alternate active state.
const meta = { title: 'Icon Links/BottomNavigation', component: BottomNavigation, args: { activeLabel: 'Home', items: defaultNavigationItems, searchPlaceholder: 'Search' }, argTypes: { activeLabel: { control: 'select', options: defaultNavigationItems.map((item) => item.label) }, searchPlaceholder: { control: 'text' } } };
export default meta;
export const HomeActive = {};
export const CartActive = { args: { activeLabel: 'Cart' } };
