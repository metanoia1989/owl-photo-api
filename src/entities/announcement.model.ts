/**
 * 系统公告表，面向全体用户的站内公告
 */
import { Schema, model } from 'mongoose'
import Announcement from '../interfaces/announcement.interfaces'

const schema = new Schema<Announcement>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: Boolean, default: true },
  type: { type: String, enum: ["default"], default: "default" },
}, {
  timestamps: { createdAt: true, updatedAt: false },
})

export default model<Announcement>('Announcement', schema)
