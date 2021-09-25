/**
 * 用户粉丝表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'

import { Follower } from '../interfaces/follower.interfaces'

const schema = new Schema<Follower>({
  userid: { type: ObjectId, ref: 'User', required: true },
  followers: [{ type: ObjectId, ref: 'User'}],
})

schema.index({ userid: 1}, { unique: true })

export default model<Follower>('Follower', schema)
