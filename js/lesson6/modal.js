import { refs } from './refs.js';
import { getProductsById } from './products-api.js';
import { renderModalProduct } from './render-function.js';

export function openModal() {
  refs.modal.classList.add('modal--is-open');
}
export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
}

export const modalOpen = async e => {
  const li = e.target.closest('li');
  const id = Number(li.dataset.id);

  if (!li) {
    return;
  }

  try {
    const data = await getProductsById(id);
    renderModalProduct(data);
    openModal();
  } catch (err) {
    console.log(err);
  }
};

export function handleModalEvents(e) {
  const isCloseBtn = e.target === refs.modalClose;
  const isNotModal = e.target === refs.modal;
  const isEscape = e.key === 'Escape';

  if (isCloseBtn || isNotModal || isEscape) {
    closeModal();
  }
}
