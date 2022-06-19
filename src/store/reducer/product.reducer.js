import { landscapeinfodetails } from "../../constants/data/index";
import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

const initialState = {
  products: landscapeinfodetails,
  filterProducts: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        ),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filterProducts: state.products.filter(
          (product) => product.countryId === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
