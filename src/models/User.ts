import mongoose, { Schema, models } from "mongoose"

export interface User {
  _id: string
  name: string
  bio: string
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  bio: { type: String, required: true },
})

export const User =
  mongoose.models.User || mongoose.model<User>("User", userSchema)
