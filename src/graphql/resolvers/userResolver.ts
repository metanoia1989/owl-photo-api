import userModel from "@src/entities/user.model"

export default {
  Query: {
    user: async (_root, { id  }: { id: string }, _context, _info ) => {
      return await userModel.findById(id).exec()
    },
  },
  User: {
    username(obj, _1, _2, _3) {
      return obj.username + " 微澜"
    }
  }
}
