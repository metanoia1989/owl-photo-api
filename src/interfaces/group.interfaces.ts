export default interface Group {
  _id: number,
  groupname: string;
  avatar: string;
  description?: string;
  donateUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
