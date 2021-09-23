export interface User {
  _id: number;
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

