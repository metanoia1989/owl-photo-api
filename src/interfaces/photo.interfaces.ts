import { Document, PopulatedDoc } from 'mongoose';
import Group from './group.interfaces';
import User from './user.interfaces';

export default interface Photo {
  userid: PopulatedDoc<User & Document>;
  groupid?: PopulatedDoc<Group & Document>;
  filename: string;
  extenstion: string;
  md5: string;
  sha1: string;
  thumb_url: string;
  preview_url: string;
  origin_url: string;
  width: number;
  height: number;
  preview_size: number;
  origin_size: number;
  color: string;
  createdAt: Date;
}
