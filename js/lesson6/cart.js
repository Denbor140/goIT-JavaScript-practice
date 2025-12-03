import { renderCartPage, byProducts, changeTheme } from './handlers.js';
import { refs } from './refs.js';
import { modalOpen, handleModalEvents } from './modal.js';

document.addEventListener('DOMContentLoaded', renderCartPage);

refs.products.addEventListener('click', modalOpen);
refs.modal.addEventListener('click', handleModalEvents);

document.addEventListener('keydown', handleModalEvents);

refs.cartSummaryBtn.addEventListener('click', byProducts);

refs.themeBtn.addEventListener('click', changeTheme);
