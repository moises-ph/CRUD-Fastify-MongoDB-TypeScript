import { Static, Type }  from '@sinclair/typebox';

export const AuthUser = Type.Object({
    username : Type.String(),
    password : Type.Optional(Type.String({
        minLength : 8
    }))
});

export type AuthUserType = Static<typeof AuthUser>;