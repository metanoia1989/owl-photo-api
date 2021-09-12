/**
 * 分馆信息表
 */

import { Schema, model } from 'mongoose'
import Group from '../interfaces/group.interfaces'

const schema = new Schema<Group>({
  groupname: { type: String, required: true },
  avatar: { type: String, required: true },
  description: Number,
}, { timestamps: true })

export default model<Group>('Group', schema)
