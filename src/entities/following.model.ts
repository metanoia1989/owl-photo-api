/**
 * 关注表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'

import Following from '../interfaces/following.interfaces'

const schema = new Schema<Following>({
  userid: { type: ObjectId, ref: 'User', required: true },
  followings: [{ type: ObjectId, ref: 'User'}],
})

schema.index({ userid: 1}, { unique: true })

export default model<Following>('Following', schema)
