import { refs } from './refs.js';

export function clearGallery() {
  refs.products.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('loader_hidden');
}

export function hideLoader() {
  refs.loader.classList.add('loader_hidden');
}

export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('is-hidden');
}

export function showScrollUpButton() {
  refs.scrollUpBtn.classList.add('scroll-top-btn--visible');
}

export function hideScrollUpButton() {
  refs.scrollUpBtn.classList.remove('scroll-top-btn--visible');
}

export function scroll() {
  if (window.scrollY > 400) {
    showScrollUpButton();
  } else {
    hideScrollUpButton();
  }
}

export function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
