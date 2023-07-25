import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "invalid email address",
    // ],
  },
  username: {
    type: String,
    required: [true, "Name is required !"],
    // minLength: [4, "username should be atleast four character long"],
    // maxLength: [15, "username should be atleast four character long"],
  },
  password: {
    type: String,
    required: [true, "Pasword is Required !"],
    // select: false,
  },
});

const User = models.User || model("User", userSchema);

export default User;
