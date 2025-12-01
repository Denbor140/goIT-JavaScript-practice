import {
  getCategoriesItem,
  getProductsItem,
  getProductsCategoryByClick,
  getProductsByValue,
} from './products-api.js';
import { renderCategoriesItem, renderProductsItem } from './render-function.js';
import { refs } from './refs.js';

export const renderHomePage = async () => {
  try {
    const data = await getCategoriesItem();
    data.unshift('All');
    renderCategoriesItem(data);
  } catch (err) {
    console.log(err);
  }

  try {
    const data = await getProductsItem();
    renderProductsItem(data.products);
  } catch (err) {
    console.log(err);
  }
};

export const renderByCategories = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

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
};

export const seachOnForm = async e => {
  e.preventDefault();

  const formData = new FormData(refs.form);
  const query = formData.get('searchValue').trim();

  if (!query) {
    alert('Поле для пошуку не може бути пустим');
    return;
  }

  try {
    const data = await getProductsByValue(query);

    if (!data.products || data.products.length === 0) {
      refs.products.innerHTML = '';
      refs.notFound.classList.add('not-found--visible');
    } else {
      refs.notFound.classList.remove('not-found--visible');
      renderProductsItem(data.products);
    }
  } catch (err) {
    console.log(err);
  }
};

export const clearSearchFrom = async () => {
  try {
    refs.form.reset();
    refs.notFound.classList.remove('not-found--visible');
    const data = await getProductsItem();
    renderProductsItem(data.products);
  } catch (err) {
    console.log(err);
  }
};
