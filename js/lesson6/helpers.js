import { refs } from './refs.js';

export function openModal() {
  refs.modal.classList.add('modal--is-open');
}
export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
}

export function handleModalEvents(e) {
  const isCloseBtn = e.target === refs.modalClose;
  const isNotModal = e.target === refs.modal;
  const isEscape = e.key === 'Escape';

  if (isCloseBtn || isNotModal || isEscape) {
    closeModal();
  }
}
