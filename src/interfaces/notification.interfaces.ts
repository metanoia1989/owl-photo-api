import { Document, PopulatedDoc } from 'mongoose';
import User from './user.interfaces';

export type NotificationType = "comment" | "reply" | "likes" | "collection" | "system";
export const NotificationTypeEnum = ["comment", "reply", "likes", "collection", "system"];
export default interface Notification {
  userid: PopulatedDoc<User & Document>;
  authorid: PopulatedDoc<User & Document>;
  relativeid?: PopulatedDoc<Document>;
  desc: string;
  type: NotificationType;
  seen: boolean;
  createdAt: Date;
  updatedAt: Date;
}
