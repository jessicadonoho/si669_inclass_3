import { CategoryMenu, defaultCategories } from './CategoryMenu';

// The emoji mirror the visible illustrations; swap `categories` for shared illustration assets when available.
const meta = { title: 'Lists/CategoryMenu', component: CategoryMenu, args: { categories: defaultCategories } };
export default meta;
export const Default = {};
export const ShortMenu = { args: { categories: defaultCategories.slice(0, 3) } };
