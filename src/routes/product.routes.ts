import {
  getSingleProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import { ProductSchema, IQueryString } from "../validations/product.validation";

export const routes = [
  {
    url: "/products",
    method: "GET",
    handler: getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: getSingleProduct,
    schema: {
      params: IQueryString,
    },
  },
  {
    url: "/products",
    method: "POST",
    handler: createProduct,
    schema: {
      body: ProductSchema,
    },
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: updateProduct,
    schema: {
      body: ProductSchema,
      params : IQueryString
    },
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: deleteProduct,
    schema: {
      params: IQueryString,
    },
  },
];
