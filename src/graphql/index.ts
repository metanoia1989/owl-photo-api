import { mergeSchemas } from "@graphql-tools/schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { applyMiddleware } from "graphql-middleware";
import { logInput } from "./middleware/logInput";
import { logResult } from "./middleware/logResult";
import { permissions } from "./middleware/permissions";

const graphqlSchema = applyMiddleware(
  mergeSchemas({
    schemas: [

    ],
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  logInput,
  permissions,
  logResult,
)


export { graphqlSchema }
