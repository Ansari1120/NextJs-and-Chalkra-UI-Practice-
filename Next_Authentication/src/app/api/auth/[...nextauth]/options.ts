import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDb } from "@/lib/connectMongo";
import User from "@/app/model/userModel";
import { compare } from "bcryptjs";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = { id: "42", name: "Dave", password: "nextauth" };
        await connectToMongoDb().catch((err) => {
          throw new Error(err);
        });

        const user = await User.findOne({
          username: credentials?.username,
        }).select("+password");

        if (!user) {
          throw new Error("Invalid credentials");
        }
        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );

        if (credentials?.username === user.name && isPasswordCorrect) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

//export default NextAuth(options)
