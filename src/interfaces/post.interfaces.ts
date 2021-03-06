import { Document, PopulatedDoc } from 'mongoose';
import { Group } from './group.interfaces';
import { User } from './user.interfaces';
import { Photo } from './photo.interfaces';

export interface Post {
  userid: PopulatedDoc<User & Document>;
  groupid?: PopulatedDoc<Group & Document>;
  caption: string;
  cover: string;
  location?: string;
  tags?: string[],
  photos?: PopulatedDoc<Photo & Document>[];
  likes?: PopulatedDoc<User & Document>[];
  collectionsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  userid: PopulatedDoc<User & Document>;
  postid: PopulatedDoc<Post & Document>;
  content: string;
  replyid?: PopulatedDoc<Comment & Document>;
  likes?: PopulatedDoc<User & Document>[];
  dislikes?: PopulatedDoc<User & Document>[];
  createdAt: Date;
}
