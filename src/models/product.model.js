"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: false,
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
