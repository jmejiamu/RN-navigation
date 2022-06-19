import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

export const selectProduct = (id) => {
  return {
    type: SELECT_PRODUCT,
    productId: id,
  };
};

export const filterProduct = (id) => {
  return {
    type: FILTERED_PRODUCTS,
    categoryId: id,
  };
};
