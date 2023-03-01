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
        
        return updatedProduct == null ? reply.code(404).send({error : "Product doesn't exists"}) : reply.send({ ProductUpdatedId : updatedProduct["_id"], ok : "Product updated succesfully" });
    }
    catch(err){
        return reply.code(500).send(err);
    };
};

export const deleteProduct = async (req, reply) => {
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return deletedProduct == null ? reply.code(404).send({error : "Product doesn't exists"}) : reply.send({ ProductDeletedId : deletedProduct["_id"], ok : "Product deleted succesfully" });
    }
    catch(err){
        return reply.code(500).send(err);
    };
};