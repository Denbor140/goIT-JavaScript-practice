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
