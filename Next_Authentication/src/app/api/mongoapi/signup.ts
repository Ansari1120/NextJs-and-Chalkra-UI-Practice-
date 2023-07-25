import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDb } from "@/lib/connectMongo";
import { hash } from "bcryptjs";
import { UserTypes } from "@/lib/userType";
import mongoose from "mongoose";
import User from "@/app/model/userModel";

const Signup = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDb().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });

    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: "User Already exists" });
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: "Password should be 6 characters long" });

      const hashedPassword = await hash(password, 12);

      User.create(
        {
          username,
          email,
          password: hashedPassword,
        },
        (error: unknown, data: UserTypes) => {
          if (error && error instanceof mongoose.Error.ValidationError) {
            //mongo db will return array
            // but we only want to show one error at a time

            for (let field in error.errors) {
              const msg = error.errors[field].message;
              return res.status(409).json({ error: msg });
            }
          }

          const user = {
            email: data.email,
            username: data.username,
            _id: data._id,
          };

          return res.status(201).json({
            success: true,
            user,
          });
        }
      );
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default Signup;
