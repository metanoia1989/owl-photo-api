import path from 'path'
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

// import clientResolver from "./clientResolver";
// import productResolver from "./productResolver";

// manaual import
// const resolvers = [
//   clientResolver,
//   productResolver,
// ]

// file loading
const resolversArray = loadFilesSync(path.join(__dirname, '.'), {
  ignoreIndex: true,
  extensions: ['ts'],
})

export default mergeResolvers(resolversArray)
