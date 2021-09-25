import { Document, PopulatedDoc } from "mongoose";
import { User } from "./user.interfaces";

export interface Following {
  userid: PopulatedDoc<User& Document>;
  followings: PopulatedDoc<User & Document>[];
}

