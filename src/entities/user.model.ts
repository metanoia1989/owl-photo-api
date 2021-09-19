/**
 * 用户信息表
 */
import { Schema, model } from 'mongoose'
import User from '../interfaces/user.interfaces'

const schema = new Schema<User>({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  nickname: { type: String, required: true },
  avatar: { type: String, required: true },
  sex: { type: String, default: "unknown", enum: ["male", "female", "unknown"] },
  password: String,
  description: String,
  followingsCount: { type: Number, default: 0 },
  followersCount: { type: Number, default: 0 },
  collectionsCount: { type: Number, default: 0 },
}, { timestamps: true })

export default model<User>('User', schema)
