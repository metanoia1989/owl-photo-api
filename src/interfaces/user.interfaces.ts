import { Document, PopulatedDoc } from 'mongoose';
import Post from './post.interfaces';

export default interface User {
  username: string;
  email?: string;
  nickname: string;
  avatar: string;
  sex: "female" | "male" | "unknown";
  password?: string;
  description?: string;
  followingsCount: number;
  followersCount: number;
  collectionsCount: number;
  createdAt: Date;
  updatedAt: Date;
}
