import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create model
const User: Model<IUser> =
  mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
