import { shield, rule, allow  } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'contextual' })(async (_parent, _args, ctx, _info) => {
  return ctx.user !== null
})

// const isAdmin = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.role === 'admin'
// })

// const isEditor = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.role === 'editor'
// })

// const isOwner = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.items.some((id) => id === parent.id)
// })

const permissions = shield({
  Query: {
    '*': isAuthenticated,
  },
  Mutation: {
    '*': isAuthenticated,
    login: allow,
    signup: allow,
  }
}, {
  fallbackRule: isAuthenticated,
})

export { permissions }
