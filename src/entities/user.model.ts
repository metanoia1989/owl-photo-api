import { Schema, model } from 'mongoose'

interface User {
  name: string;
  avatar: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String
})

export default model<User>('User', schema)
