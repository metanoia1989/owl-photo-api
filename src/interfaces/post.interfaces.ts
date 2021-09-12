import { Document, PopulatedDoc } from 'mongoose';
import Group from './group.interfaces';
import User from './user.interfaces';
import Photo from './photo.interfaces';

export default interface Post {
  userid: PopulatedDoc<User & Document>;
  groupid?: PopulatedDoc<Group & Document>;
  caption: string;
  cover: string;
  location?: string;
  likes?: PopulatedDoc<User & Document>[];
  collections?: PopulatedDoc<User & Document>[];
  photos?: PopulatedDoc<Photo & Document>[];
  createdAt: Date;
  updatedAt: Date;
}
