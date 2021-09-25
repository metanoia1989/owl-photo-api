import { mergeSchemas } from "@graphql-tools/schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const graphqlSchema = mergeSchemas({
  schemas: [

  ],
  typeDefs: typeDefs,
  resolvers: resolvers,
})


export { graphqlSchema }
