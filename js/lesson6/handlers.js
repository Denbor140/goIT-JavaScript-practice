import {
  getCategoriesItem,
  getProductsItem,
  getProductsCategoryByClick,
  getProductsByValue,
  getProductsById,
  limit,
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
import {
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './helpers.js';

let page = 1;
let currentCategory = null;
let query = '';

export const renderHomePage = async () => {
  const theme = getItemLocalStorageTheme();

  refs.body.removeAttribute('data-theme');
  if (theme === 'dark') {
    refs.body.setAttribute('data-theme', 'dark');
  }

  page = 1;

  showLoader();
  hideLoadMoreButton();
  clearGallery();

  try {
    const [categories, products] = await Promise.all([
      getCategoriesItem(),
      getProductsItem(),
    ]);

    categories.unshift('All');
    renderCategoriesItem(categories);
    renderProductsItem(products.products);

    if (products.total > limit) showLoadMoreButton();
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

  //   if (data.total < limit) {
  //     hideLoadMoreButton();
  //   } else {
  //     showLoadMoreButton();
  //     renderProductsItem(data.products);
  //   }
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
  currentCategory = selectCategory === 'All' ? null : selectCategory;
  const btnCategory = refs.categories.querySelectorAll('.categories__btn');
  btnCategory.forEach(btn => btn.classList.remove('categories__btn--active'));

  e.target.classList.add('categories__btn--active');

  page = 1;

  showLoader();
  hideLoadMoreButton();
  clearGallery();
  refs.notFound.classList.remove('not-found--visible');
  refs.form.reset();

  try {
    let data;
    let total;
    if (currentCategory === null) {
      const allData = await getProductsItem(page);
      data = allData.products;
      total = allData.total;
    } else {
      const categotyData = await getProductsCategoryByClick(currentCategory);
      data = categotyData.products;
      total = categotyData.total;
    }

    if (!data || data.length === 0) {
      refs.notFound.classList.add('not-found--visible');
    } else {
      renderProductsItem(data);
    }

    if (total > limit) showLoadMoreButton();
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

export const seachOnForm = async e => {
  e.preventDefault();

  const formData = new FormData(refs.form);
  query = formData.get('searchValue').trim();

  if (!query) {
    alert('Поле для пошуку не може бути пустим');
    return;
  }

  currentCategory = null;
  page = 1;

  const btnCategory = refs.categories.querySelectorAll('.categories__btn');
  btnCategory.forEach(btn => btn.classList.remove('categories__btn--active'));
  showLoader();
  hideLoadMoreButton();
  clearGallery();
  refs.notFound.classList.remove('not-found--visible');

  try {
    const data = await getProductsByValue(query);

    if (!data.products || data.products.length === 0) {
      refs.notFound.classList.add('not-found--visible');
    } else {
      renderProductsItem(data.products);
    }

    if (data.total > limit) {
      showLoadMoreButton();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

export const clearSearchFrom = async () => {
  showLoader();
  hideLoadMoreButton();
  clearGallery();
  refs.notFound.classList.remove('not-found--visible');
  refs.form.reset();

  try {
    const data = await getProductsItem();
    renderProductsItem(data.products);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

export const renderWishlistPage = async () => {
  const theme = getItemLocalStorageTheme();

  refs.body.removeAttribute('data-theme');
  if (theme === 'dark') {
    refs.body.setAttribute('data-theme', 'dark');
  }

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

export const renderCartPage = async () => {
  const theme = getItemLocalStorageTheme();

  refs.body.removeAttribute('data-theme');
  if (theme === 'dark') {
    refs.body.setAttribute('data-theme', 'dark');
  }

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

export async function getLoadMoreData() {
  hideLoadMoreButton();
  showLoader();

  page += 1;

  try {
    let moreData;

    if (currentCategory === null && !query) {
      moreData = await getProductsItem(page);
    } else if (currentCategory) {
      moreData = await getProductsCategoryByClick(currentCategory, page);
    } else if (query) {
      moreData = await getProductsByValue(query, page);
    }

    const totalPages = Math.ceil(moreData.total / 12);

    renderProductsItem(moreData.products);
    window.scrollBy({
      top: 784,
      behavior: 'smooth',
    });

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      alert('Вибачте але більше товарів немає');
      return;
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
}
