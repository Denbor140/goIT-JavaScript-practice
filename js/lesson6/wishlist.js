import { renderWishlistPage } from './handlers.js';
import { refs } from './refs.js';
import { modalOpen, handleModalEvents } from './modal.js';

document.addEventListener('DOMContentLoaded', renderWishlistPage);

refs.products.addEventListener('click', modalOpen);
refs.modal.addEventListener('click', handleModalEvents);

document.addEventListener('keydown', handleModalEvents);
