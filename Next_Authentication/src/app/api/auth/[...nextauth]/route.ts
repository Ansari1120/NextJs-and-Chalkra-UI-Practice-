import NextAuth from "next-auth";
import { options } from "./options";
import { connectToMongoDb } from "@/lib/connectMongo";
import User from "@/app/model/userModel";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { UserTypes } from "@/lib/userType";
import { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(options);

export { handler as GET, handler as POST };

// const handler = {
//     loginOption: NextAuth(options),
//     signupOption: async (req: NextApiRequest, res: NextApiResponse) => {
//       {
//         connectToMongoDb().catch((err) => res.json(err));
//         if (req.method === "POST") {
//           if (!req.body)
//             return res.status(400).json({ error: "Data is Missing" });
//           const { email, username, password } = req.body;
//           const userExists = await User.findOne({ email });
//           if (userExists) {
//             return res.status(409).json({ error: "User Already Exists" });
//           } else {
//             if (password.length < 6) {
//               return res.status(409).json({
//                 error:
//                   "password is weak it should be more than 5 characters Long",
//               });
//             }
//             const hashedPassword = await hash(password, 12);
//             User.create(
//               { username, email, password: hashedPassword },
//               (error: unknown, data: UserTypes) => {
//                 if (error && error instanceof mongoose.Error.ValidationError) {
//                   for (let field in error.errors) {
//                     const msg = error.errors[field].message;
//                     return res.status(409).json({ error: msg });
//                   }
//                 }
//                 const user = {
//                   email: data.email,
//                   username: data.username,
//                   _id: data._id,
//                 };
//                 return res.status(201).json({
//                   success: true,
//                   user,
//                 });
//               }
//             );
//           }
//         } else {
//           res.status(405).json({ error: "Invalid Api method call" });
//         }
//       }
//     },
//   };
