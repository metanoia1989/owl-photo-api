/**
 * 消息通知表，用户发送的消息
 */

import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'
import Notification, { NotificationTypeEnum } from '../interfaces/notification.interfaces'

const schema = new Schema<Notification>({
  userid: { type: ObjectId, ref: 'User' },
  authorid: { type: ObjectId, ref: 'User' },
  relativeid: { type: ObjectId },
  desc: { type: String, required: true },
  type: { type: String, enum: NotificationTypeEnum,require: true},
  seen: { type: Boolean, default: false },
}, {
  timestamps: { createdAt: true, updatedAt: false },
})

schema.index({ userid: 1 })

export default model<Notification>('Notification', schema)
