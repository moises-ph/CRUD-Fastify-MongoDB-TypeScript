import { Product } from "../models/product.model";

export const getProducts = async (req, reply) => {
    const products = await Product.find();
    return reply.code(200).send(products);
};


export const getSingleProduct = async (req, reply) => {
    const product = await Product.findById(req.params.id);
    return reply.code(200).send(product);
};

export const createProduct = async (req, reply) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        return reply.code(200).send(newProduct);
    }
    catch(err){
        return reply.code(500).send(err);
    };
};

export const updateProduct = async (req, reply) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        return reply.send(updateProduct);
    }
    catch(err){
        return reply.code(500).send(err);
    };
};

export const deleteProduct = async (req, reply) => {
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return reply.send(deletedProduct);
    }
    catch(err){
        return reply.code(500).send(err);
    };
};