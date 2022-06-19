import { categoryTypes } from "../types/index";

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (id) => {
  return {
    type: SELECT_CATEGORY,
    categoryId: id,
  };
};
