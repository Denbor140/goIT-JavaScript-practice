import { refs } from './refs.js';

export function renderCategoriesItem(categories) {
  const li = categories
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
 `
    )
    .join('');
  refs.categories.innerHTML = li;
}

export function renderProductsItem(products) {
  const li = products
    .map(
      product => `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt="${product.tags}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${product.brand}</span></p>
    <p class="products__category">Category:${product.category} </p>
    <p class="products__price">Price:${product.price} $</p>
 </li>`
    )
    .join('');

  refs.products.insertAdjacentHTML('beforeend', li);
}

export function renderModalProduct(product) {
  const markup = `<img class="modal-product__img" src="${product.images[0]}" alt="${product.tags}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags">${product.tags}</ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping:${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${product.returnPolicy}</p>
        <p class="modal-product__price">Price:${product.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;
  refs.modalProduct.innerHTML = markup;
}
