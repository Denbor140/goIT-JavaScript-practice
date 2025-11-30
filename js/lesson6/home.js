import {
  getCategoriesItem,
  getProductsItem,
  getProductsCategoryByClick,
  getProductsById,
} from './products-api.js';
import {
  renderCategoriesItem,
  renderProductsItem,
  renderModalProduct,
} from './render-function.js';
import { refs } from './refs.js';
import { openModal, handleModalEvents } from './helpers.js';

// /////////////////////////////////////

async function renderCategoryItem() {
  try {
    const data = await getCategoriesItem();
    const categories = ['All', ...data];
    renderCategoriesItem(categories);
  } catch (err) {
    console.log(err);
  }
}

renderCategoryItem();

// /////////////////////////////////////

async function renderProductItem() {
  try {
    const data = await getProductsItem();

    renderProductsItem(data.products);
  } catch (err) {
    console.log(err);
  }
}
renderProductItem();

// /////////////////////////////////////
refs.categories.addEventListener('click', async e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectCategory = e.target.textContent;
  const btnCategory = refs.categories.querySelectorAll('.categories__btn');
  btnCategory.forEach(btn => btn.classList.remove('categories__btn--active'));

  e.target.classList.add('categories__btn--active');

  try {
    let data;
    if (selectCategory === 'All') {
      const allData = await getProductsItem();
      data = allData.products;
    } else {
      const categotyData = await getProductsCategoryByClick(selectCategory);
      data = categotyData.products;
    }

    if (!data || data.length === 0) {
      refs.products.innerHTML = '';
      refs.notFound.classList.add('not-found--visible');
    } else {
      refs.notFound.classList.remove('not-found--visible');
      renderProductsItem(data);
    }
  } catch (err) {
    console.log(err);
  }
});

// /////////////////////////////////
refs.products.addEventListener('click', async e => {
  const liElem = e.target.closest('li');
  const idElem = liElem.dataset.id;

  if (!liElem) {
    return;
  }

  try {
    const data = await getProductsById(idElem);
    renderModalProduct(data);
    openModal();
  } catch (err) {
    console.log(err);
  }
});

// //////////////////////////
refs.modal.addEventListener('click', handleModalEvents);
document.addEventListener('keydown', handleModalEvents);
