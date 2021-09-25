import { Document, PopulatedDoc } from 'mongoose';
import { Group } from './group.interfaces';
import { User } from './user.interfaces';

export type FileDriver = 'local' | 'alioss' | 'qniuoss' | 'txcos'
export const FileDriverEnums: Array<FileDriver> = ['local', 'alioss', 'qniuoss', 'txcos']

export interface Photo {
  userid: PopulatedDoc<User & Document>
  groupid?: PopulatedDoc<Group & Document>
  driver: FileDriver
  filename: string
  extenstion: string
  md5: string
  sha1: string
  thumb_url: string
  preview_url: string
  origin_url: string
  width: number
  height: number
  preview_size: number
  origin_size: number
  color: string
  createdAt: Date
}
