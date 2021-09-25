/**
 * 照片表
 */

import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'
import { Photo } from '../interfaces/photo.interfaces'

const schema = new Schema<Photo>({
  userid: { type: ObjectId, ref: 'User', required: true },
  groupid: { type: ObjectId, ref: 'Group' },
  filename: { type: String, required: true },
  extenstion: { type: String, required: true },
  md5: { type: String, required: true, unique: true },
  sha1: String,
  thumb_url: String,
  preview_url: String,
  origin_url: String,
  width: Number,
  height: Number,
  preview_size: Number,
  origin_size: Number,
  color: String,
}, {
  timestamps: { createdAt: true, updatedAt: false },
})

schema.index({ md5: 1 }, { unique: true })
schema.index({ userid: 1 })

export default model<Photo>('Photo', schema)
