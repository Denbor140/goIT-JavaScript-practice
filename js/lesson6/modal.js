import { refs } from './refs.js';
import { getProductsById } from './products-api.js';
import { renderModalProduct } from './render-function.js';
import {
  getItemLocalStorage,
  setItemLocalStorage,
  getItemLocalStorageWishlist,
  setItemLocalStorageWishlist,
} from './storage.js';

import { renderCartPage } from './handlers.js';

let idCart;

export function openModal() {
  refs.modal.classList.add('modal--is-open');
}
export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
}

export const modalOpen = async e => {
  const li = e.target.closest('li');
  if (!li) {
    return;
  }

  const id = Number(li.dataset.id);
  idCart = id;

  try {
    const data = await getProductsById(id);
    renderModalProduct(data);
    openModal();

    const cart = getItemLocalStorage();
    if (cart.includes(id)) {
      refs.addToCartBtn.textContent = 'Remove from Cart';
    } else {
      refs.addToCartBtn.textContent = 'Add to Cart';
    }

    const wishlist = getItemLocalStorageWishlist();
    if (wishlist.includes(id)) {
      refs.addToWishlistBtn.textContent = 'Remove from Wishlist';
    } else {
      refs.addToWishlistBtn.textContent = 'Add to Wishlist';
    }
  } catch (err) {
    console.log(err);
  }
};

export function handleModalEvents(e) {
  const isCloseBtn = e.target === refs.modalClose;
  const isNotModal = e.target.classList.contains('modal');
  const isEscape = e.key === 'Escape';
  const isAddToCartBtn = e.target.classList.contains(
    'modal-product__btn--cart'
  );
  const isAddToWishlistBtn = e.target.classList.contains(
    'modal-product__btn--wishlist'
  );

  if (isCloseBtn || isNotModal || isEscape) {
    closeModal();
    return;
  }

  if (isAddToCartBtn) {
    const cartId = idCart;
    let cart = getItemLocalStorage();

    if (!cart.includes(cartId)) {
      cart.push(cartId);
      setItemLocalStorage(cart);

      e.target.textContent = 'Remove from Cart';
    } else {
      cart = cart.filter(id => id !== cartId);
      setItemLocalStorage(cart);
      e.target.textContent = 'Add to cart';

      removeProductFromDOM(cartId);
      renderCartPage();
      closeModal();
    }

    updateCartCounter();
  }

  if (isAddToWishlistBtn) {
    const wishlistId = idCart;
    let wishlist = getItemLocalStorageWishlist();

    if (!wishlist.includes(wishlistId)) {
      wishlist.push(wishlistId);
      setItemLocalStorageWishlist(wishlist);

      e.target.textContent = 'Remove from Wishlist';
    } else {
      wishlist = wishlist.filter(id => id !== wishlistId);
      setItemLocalStorageWishlist(wishlist);

      e.target.textContent = 'Add to Wishlist';
    }
    updateWishlistCounter();
  }
}

function updateCartCounter() {
  const cart = getItemLocalStorage() || [];
  refs.spanCountCart.textContent = cart.length;
}

function updateWishlistCounter() {
  const wishlist = getItemLocalStorageWishlist() || [];
  refs.spanCountWishlist.textContent = wishlist.length;
}

export function updateCounters() {
  updateCartCounter();
  updateWishlistCounter();
}

function removeProductFromDOM(id) {
  const li = refs.products.querySelector(`li[data-id="${id}"]`);
  if (li) {
    li.remove();
  }
}
