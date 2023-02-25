"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const product_controller_1 = require("../controllers/product.controller");
const product_validation_1 = require("../validations/product.validation");
exports.routes = [
    {
        url: "/products",
        method: "GET",
        handler: product_controller_1.getProducts,
    },
    {
        url: "/products/:id",
        method: "GET",
        handler: product_controller_1.getSingleProduct,
        schema: {
            querystring: product_validation_1.IQueryString,
        },
    },
    {
        url: "/products",
        method: "POST",
        handler: product_controller_1.createProduct,
        schema: {
            body: product_validation_1.ProductSchema,
        },
    },
    {
        url: "/products/:id",
        method: "PUT",
        handler: product_controller_1.updateProduct,
        schema: {
            body: product_validation_1.ProductSchema,
            querystring: product_validation_1.IQueryString
        },
    },
    {
        url: "/products/:id",
        method: "DELETE",
        handler: product_controller_1.deleteProduct,
        schema: {
            querystring: product_validation_1.IQueryString,
        },
    },
];
