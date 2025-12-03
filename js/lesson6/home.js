import {
  renderHomePage,
  renderByCategories,
  seachOnForm,
  clearSearchFrom,
  changeTheme,
  getLoadMoreData,
} from './handlers.js';
import { refs } from './refs.js';
import { modalOpen, handleModalEvents } from './modal.js';

///////////////////////////////////////

document.addEventListener('DOMContentLoaded', renderHomePage);

///////////////////////////////////////
refs.categories.addEventListener('click', renderByCategories);

///////////////////////////////////
refs.products.addEventListener('click', modalOpen);

////////////////////////////
refs.modal.addEventListener('click', handleModalEvents);
document.addEventListener('keydown', handleModalEvents);

// //////////////////////////////////
refs.form.addEventListener('submit', seachOnForm);
refs.formBtnClear.addEventListener('click', clearSearchFrom);

// ///////////////////////////////////
refs.themeBtn.addEventListener('click', changeTheme);
refs.loadMoreBtn.addEventListener('click', getLoadMoreData);
