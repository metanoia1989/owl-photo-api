import { Document, PopulatedDoc } from "mongoose";
import User from "./user.interfaces";

export default interface Follower {
  userid: PopulatedDoc<User& Document>;
  followers: PopulatedDoc<User & Document>[];
}
