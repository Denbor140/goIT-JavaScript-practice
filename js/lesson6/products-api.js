export const limit = 12;

export async function getCategoriesItem() {
  try {
    const response = await fetch(
      'https://dummyjson.com/products/category-list'
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsItem(currentPage = 1) {
  const skip = (currentPage - 1) * limit;
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsCategoryByClick(category, currentPage = 1) {
  const skip = (currentPage - 1) * limit;
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsById(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsByValue(query, currentPage = 1) {
  const skip = (currentPage - 1) * limit;
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
