import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/lib/mongo.config";
import { User } from "@/model/userModel";
export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        connect();

        const findUser = await User.findOne({ email: user.email });

        if (findUser) {
          return true;
        }
        await User.create({ name: user.name, email: user.email });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail:",
          type: "email",
          placeholder: "Enter Your E-mail",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        connect();

        const user = await User.findOne({ email: credentials?.email });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          return null;
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};
