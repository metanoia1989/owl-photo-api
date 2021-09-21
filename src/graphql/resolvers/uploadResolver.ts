import storeUpload from "@src/libraries/storeUpload"
import { GraphQLUpload } from 'graphql-upload'


export default {
  Query: {
    // async getUploads(_, {}) {
    //   // return await this.getUploads.find()
    // },
  },
  Mutation: {
    async singleUpload(_, { file }) {
      console.log('接收到了请求', file)
      return await storeUpload(file)
    },
    async multipleUpload(_, { files }) {
      return await Promise.all(files.map(storeUpload))
    },
  },
  Upload: GraphQLUpload,
}
