/**
 * 帖子表
 */
import { ObjectId } from 'bson'
import { Schema, model } from 'mongoose'
import { Post, Comment } from '../interfaces/post.interfaces'

const postSchema = new Schema<Post>({
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
export const PostModel = model<Post>('Post', postSchema)



const commentSchema = new Schema<Comment>({
  userid: { type: ObjectId, ref: 'User', required: true },
  postid: { type: ObjectId, ref: 'Post', required: true },
  content: String,
  replyid: { type: ObjectId, ref: 'Comment' },
  likes: [{ type: ObjectId, ref: 'User'} ],
  dislikes: [{ type: ObjectId, ref: 'User'} ],
}, {
  timestamps: { createdAt: true, updatedAt: false },
  collection: 'comment',
})
export const CommentModel = model<Comment>('Comment', commentSchema)
