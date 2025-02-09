import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try {
          const validCredentials = signInSchema.parse(credentials);

          const users = {
            email: "test@gmail.com",
            password: "1234",
          };

          if (
            validCredentials.email === users.email &&
            validCredentials.password === users.password
          ) {
            return { email: users.email, password: users.password };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch {
          throw new Error("invalid credentials");
        }
      },
    }),
  ],
});
