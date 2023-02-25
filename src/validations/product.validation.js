"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQueryString = exports.ProductSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
// interface Product {
//   title: string;
//   price: number;
//   image: string;
//   description: string;
//   quantity: number;
// }
exports.ProductSchema = typebox_1.Type.Object({
    title: typebox_1.Type.Optional(typebox_1.Type.String()),
    price: typebox_1.Type.Optional(typebox_1.Type.Number({ minimum: 0 })),
    image: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'uri' })),
    description: typebox_1.Type.Optional(typebox_1.Type.String()),
    quantity: typebox_1.Type.Optional(typebox_1.Type.Number({ minimum: 0 })),
});
exports.IQueryString = typebox_1.Type.Object({
    id: typebox_1.Type.String()
});
