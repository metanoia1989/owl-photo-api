/**
 * 用户收藏表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'

import CollectionPost from '../interfaces/collection_post.interfaces'

const schema = new Schema<CollectionPost>({
  userid: { type: ObjectId, ref: 'User', required: true },
  posts: [{ type: ObjectId, ref: 'Post'}],
}, { timestamps: true })

export default model<CollectionPost>('CollectionPost', schema)
