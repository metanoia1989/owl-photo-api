import { Document, PopulatedDoc } from "mongoose";
import Post from "./post.interfaces";
import User from "./user.interfaces";

export default interface CollectionPost {
  userid: PopulatedDoc<User& Document>;
  posts: PopulatedDoc<Post & Document>[];
}
