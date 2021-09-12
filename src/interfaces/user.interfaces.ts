import { Document, PopulatedDoc } from 'mongoose';
import Post from './post.interfaces';

export default interface User {
  username: string;
  email?: string;
  nickname: string;
  avatar: string;
  password?: string;
  collections: PopulatedDoc<Post & Document>[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
