const CART_STORAGE_KEY = 'cart';
const WISHLIST_STORAGE_KEY = 'wishlist';

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
