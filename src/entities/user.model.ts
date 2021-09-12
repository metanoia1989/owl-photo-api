/**
 * 用户信息表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'
import User from '../interfaces/user.interfaces'

const schema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  nickname: { type: String, required: true },
  avatar: { type: String, required: true },
  password: String,
  description: String,
  collections: [{ type: ObjectId, ref: 'Post'} ],
  createdAt: Date,
  updatedAt: Date,
})

export default model<User>('User', schema)
