import { UserModel } from "@src/entities/user.model"
import { UserAlreadyExists, UserNotFound } from "@src/libraries/errors"
import { signAccessToken } from "@src/services/auth"

export default {
  Query: {
    async findUser(_root, { id  }: { id: string }, _context, _info ) {
      return await UserModel.findById(id).exec()
    },
    async me(_root, _args, context, _info ) {
      return context.user
    },
  },
  Mutation: {
    async login(_root, { username, password: _ }, _context, _info) {
      let user  = await UserModel.findOne({ username }).exec()

      if (!user) throw new UserNotFound()

      let token = signAccessToken({
        id: String(user._id),
        username: user.username,
        expiresIn: 60 * 60 * 24 * 7
      })
      return { token }
    },
    async signup(_root, { username, password: _ }, _context, _info) {
      let user  = await UserModel.findOne({ username }).exec()
      if (user) throw new UserAlreadyExists()
      let id = Math.floor(Math.random() * 100000000)
      user = new UserModel({ _id: id, username, avatar: "default.png", nickname: username })
      await user.save()
      return user
    }
  },
  User: {
    username(obj, _1, _2, _3) {
      return obj.username + " 微澜"
    }
  }
}
