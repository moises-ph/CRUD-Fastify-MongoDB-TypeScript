"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getSingleProduct = exports.getProducts = void 0;
const product_model_1 = require("../models/product.model");
const getProducts = async (req, reply) => {
    const products = await product_model_1.Product.find();
    return reply.code(200).send(products);
};
exports.getProducts = getProducts;
const getSingleProduct = async (req, reply) => {
    const product = await product_model_1.Product.findById(req.params.id);
    return reply.code(200).send(product);
};
exports.getSingleProduct = getSingleProduct;
const createProduct = async (req, reply) => {
    try {
        const newProduct = new product_model_1.Product(req.body);
        await newProduct.save();
        return reply.code(200).send(newProduct);
    }
    catch (err) {
        return reply.code(500).send(err);
    }
    ;
};
exports.createProduct = createProduct;
const updateProduct = async (req, reply) => {
    try {
        const updatedProduct = await product_model_1.Product.findByIdAndUpdate(req.params.id, req.body);
        return updatedProduct == null ? reply.code(404).send({ error: "Product doesn't exists" }) : reply.send({ ProductDeletedId: updatedProduct["_id"], ok: "Product updated succesfully" });
    }
    catch (err) {
        return reply.code(500).send(err);
    }
    ;
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, reply) => {
    try {
        const deletedProduct = await product_model_1.Product.findByIdAndDelete(req.params.id);
        return deletedProduct == null ? reply.code(404).send({ error: "Product doesn't exists" }) : reply.send({ ProductDeletedId: deletedProduct["_id"], ok: "Product deleted succesfully" });
    }
    catch (err) {
        return reply.code(500).send(err);
    }
    ;
};
exports.deleteProduct = deleteProduct;
