import { Static, Type } from '@sinclair/typebox';
import { Types } from 'mongoose';

// interface Product {
//   title: string;
//   price: number;
//   image: string;
//   description: string;
//   quantity: number;
// }

export const ProductSchema = Type.Object({
    title: Type.Optional(Type.String()),
    price: Type.Optional(Type.Number({ minimum : 0 })),
    image: Type.Optional(Type.String({ format : 'uri' })),
    description: Type.Optional(Type.String()),
    quantity: Type.Optional(Type.Number({ minimum : 0 })),
});

export type ProducType = Static<typeof ProductSchema>;


export const IQueryString = Type.Object({
    id : Type.String()
});

export type IQueryStringType = Static<typeof IQueryString>