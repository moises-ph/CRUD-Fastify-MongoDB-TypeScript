"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const product_controller_1 = require("../controllers/product.controller");
const product_validation_1 = require("../validations/product.validation");
const routes = {
    getAllProducts: {
        /* url: "/products", */
        handler: product_controller_1.getProducts,
    },
    getSingleProduct: {
        /* url: "/products/:id", */
        handler: product_controller_1.getSingleProduct,
        schema: {
            params: product_validation_1.IQueryString,
        },
    },
    postProduct: {
        /* url: "/products", */
        handler: product_controller_1.createProduct,
        schema: {
            body: product_validation_1.ProductSchema,
        },
    },
    updateProduct: {
        /* url: "/products/:id", */
        handler: product_controller_1.updateProduct,
        schema: {
            body: product_validation_1.ProductSchema,
            params: product_validation_1.IQueryString,
        },
    },
    deleteProduct: {
        /* url: "/products/:id", */
        handler: product_controller_1.deleteProduct,
        schema: {
            params: product_validation_1.IQueryString,
        },
    },
};
const productRoutes = (fastify, options, done) => {
    // Get All products
    fastify.get(options.url, routes.getAllProducts);
    // Get a single product
    fastify.get(`${options.url}/:id`, routes.getSingleProduct);
    // Create a product
    fastify.post(options.url, routes.postProduct);
    // Update a product
    fastify.put(`${options.url}/:id`, routes.updateProduct);
    // Delete a product
    fastify.delete(`${options.url}/:id`, routes.deleteProduct);
    done();
};
exports.productRoutes = productRoutes;
