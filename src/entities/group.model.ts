/**
 * 分馆信息表
 */

import { Schema, model } from 'mongoose'
import Group from '../interfaces/group.interfaces'

const schema = new Schema<Group>({
  _id: { type: Number },
  groupname: { type: String, required: true },
  avatar: { type: String, required: true },
  description: Number,
  donateUrl: String,
}, { timestamps: true })

export default model<Group>('Group', schema)
