/**
 * 帖子表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'
import { Post } from '../interfaces/post.interfaces'

const schema = new Schema<Post>({
  userid: { type: ObjectId, ref: 'User', required: true },
  groupid: { type: ObjectId, ref: 'Group' },
  caption: { type: String, required: true },
  cover: { type: String, required: true },
  location: String,
  tags: [String],
  collectionsCount: { type: Number, default: 0 },
  likes: [{ type: ObjectId, ref: 'User'} ],
  photos: [{ type: ObjectId, ref: 'Photo'} ],
}, {
  timestamps: true,
  collection: 'post',
})

export default model<Post>('Post', schema)
