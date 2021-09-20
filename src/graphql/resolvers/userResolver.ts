import userModel from "@src/entities/user.model"

export default {
  Query: {
    user: async (_, { id  }: { id: string } ) => {
      return await userModel.findById(id).exec()
    }
  }
}
