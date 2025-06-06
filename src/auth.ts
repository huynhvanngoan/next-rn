import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;

                // logic to verify if the user exists
                // Call backend
                // user = {
                //     id: "1",
                //     username: "admin",
                //     email: "admin@gmail.com",
                //     role: "admin",
                //     isVerify: true,
                //     type: "admin",
                // };

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    // throw new Error("User not found.");
                    return Promise.reject(new Error("User not found."));
                }

                // return user object with their profile data
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
});
