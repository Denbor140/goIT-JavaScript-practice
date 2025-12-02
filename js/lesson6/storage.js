const CART_STORAGE_KEY = 'cart';
const WISHLIST_STORAGE_KEY = 'wishlist';
const THEME_STORAGE_KEY = 'theme';

export function getItemLocalStorage() {
  const storage = localStorage.getItem(CART_STORAGE_KEY);
  return storage ? JSON.parse(storage) : [];
}
export function setItemLocalStorage(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function getItemLocalStorageWishlist() {
  const storage = localStorage.getItem(WISHLIST_STORAGE_KEY);
  return storage ? JSON.parse(storage) : [];
}

export function setItemLocalStorageWishlist(wishlist) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
}

export function getItemLocalStorageTheme() {
  const storage = localStorage.getItem(THEME_STORAGE_KEY);
  return storage ? JSON.parse(storage) : [];
}

export function setItemLocalStorageTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
}
