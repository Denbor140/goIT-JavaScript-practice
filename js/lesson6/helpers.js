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
  loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hidden');
}
