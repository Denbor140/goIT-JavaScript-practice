import {
  getCategoriesItem,
  getProductsItem,
  getProductsCategoryByClick,
  getProductsByValue,
  getProductsById,
} from './products-api.js';
import { renderCategoriesItem, renderProductsItem } from './render-function.js';
import { refs } from './refs.js';
import { updateCounters } from './modal.js';
import {
  getItemLocalStorage,
  getItemLocalStorageWishlist,
  getItemLocalStorageTheme,
  setItemLocalStorageTheme,
} from './storage.js';
import { showLoader, hideLoader, clearGallery } from './helpers.js';

export const renderHomePage = async () => {
  const theme = getItemLocalStorageTheme();

  refs.body.removeAttribute('data-theme');
  if (theme === 'dark') {
    refs.body.setAttribute('data-theme', 'dark');
  }

  showLoader();

  try {
    const [categories, products] = await Promise.all([
      getCategoriesItem(),
      getProductsItem(),
    ]);

    categories.unshift('All');
    renderCategoriesItem(categories);
    renderProductsItem(products.products);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }

  // try {
  //   const data = await getCategoriesItem();
  //   data.unshift('All');
  //   renderCategoriesItem(data);
  // } catch (err) {
  //   console.log(err);
  // }

  // try {
  //   const data = await getProductsItem();
  //   renderProductsItem(data.products);
  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   hideLoader();
  // }

  updateCounters();
};

export const renderByCategories = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const selectCategory = e.target.textContent;
  const btnCategory = refs.categories.querySelectorAll('.categories__btn');
  btnCategory.forEach(btn => btn.classList.remove('categories__btn--active'));

  e.target.classList.add('categories__btn--active');

  clearGallery();
  showLoader();

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
  } finally {
    hideLoader();
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

  clearGallery();
  showLoader();
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
  } finally {
    hideLoader();
  }
};

export const clearSearchFrom = async () => {
  clearGallery();
  showLoader();
  try {
    refs.form.reset();
    refs.notFound.classList.remove('not-found--visible');
    const data = await getProductsItem();
    renderProductsItem(data.products);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

export const renderWishlistPage = async () => {
  const wishlist = getItemLocalStorageWishlist();

  showLoader();

  try {
    const promises = wishlist.map(id => getProductsById(id));
    const data = await Promise.all(promises);
    renderProductsItem(data);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }

  updateCounters();
};

export const renderCartPage = async e => {
  const cart = getItemLocalStorage();

  showLoader();

  try {
    const promises = cart.map(id => getProductsById(id));
    const data = await Promise.all(promises);
    renderProductsItem(data);

    const price = data
      .map(cart => cart.price)
      .reduce((total, price) => total + price, 0)
      .toFixed(2);

    refs.spanItemSummary.textContent = data.length;
    refs.spanPriceSummary.textContent = `$${+price}`;
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }

  updateCounters();
};

export const byProducts = () => {
  alert('Дякуюємо за купівлю');
};

export function changeTheme() {
  const currentTheme = refs.body.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    refs.body.removeAttribute('data-theme');
    setItemLocalStorageTheme('light');
  } else {
    refs.body.setAttribute('data-theme', 'dark');
    setItemLocalStorageTheme('dark');
  }
}
