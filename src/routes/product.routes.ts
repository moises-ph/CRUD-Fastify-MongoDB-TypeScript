import fastify, { FastifyInstance } from "fastify";
import {
  getSingleProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import {
  ProductSchema,
  IQueryString,
  IQueryStringType,
  ProducType,
} from "../validations/product.validation";

const routes = {
  getAllProducts: {
    /* url: "/products", */
    handler: getProducts,
  },
  getSingleProduct: {
    /* url: "/products/:id", */
    handler: getSingleProduct,
    schema: {
      params: IQueryString,
    },
  },
  postProduct: {
    /* url: "/products", */
    handler: createProduct,
    schema: {
      body: ProductSchema,
    },
  },
  updateProduct: {
    /* url: "/products/:id", */
    handler: updateProduct,
    schema: {
      body: ProductSchema,
      params: IQueryString,
    },
  },
  deleteProduct: {
    /* url: "/products/:id", */
    handler: deleteProduct,
    schema: {
      params: IQueryString,
    },
  },
};

export const productRoutes = (
  fastify: FastifyInstance,
  options: any,
  done: any
) => {
  // Get All products
  fastify.get(options.url, routes.getAllProducts);

  // Get a single product
  fastify.get<{ Params: IQueryStringType }>(
    `${options.url}/:id`,
    routes.getSingleProduct
  );

  // Create a product
  fastify.post<{ Body: ProducType }>(
    options.url,
    routes.postProduct
  );

  // Update a product
  fastify.put<{ Params: IQueryStringType; Body: ProducType }>(
    `${options.url}/:id`,
    routes.updateProduct
  );

  // Delete a product
  fastify.delete<{ Params: IQueryStringType }>(
    `${options.url}/:id`,
    routes.deleteProduct
  );

  done();
};
