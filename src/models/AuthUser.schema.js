"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.AuthUser = typebox_1.Type.Object({
    username: typebox_1.Type.String(),
    password: typebox_1.Type.Optional(typebox_1.Type.String({
        minLength: 8
    }))
});
