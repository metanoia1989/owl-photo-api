import Router from "koa-router";
import graphqlHttp from 'koa-graphql';
import { config } from "../config";
import { graphqlSchema } from "../graphql";
// import { graphqlUploadKoa } from 'graphql-upload'

const graphqlRouter = new Router()

const option: graphqlHttp.Options = (request, _response, _ctx)  => ({
  schema: graphqlSchema,
  graphiql: true,
  pretty: true,
  rootValue: {
    hello() {
      return 'hello world'
    }
  },
  context: {
    user: request.headers.authorization ? { name: "hello" } : "none",
  }
});

// graphqlRouter.use(graphqlUploadKoa({
//   maxFileSize: 3 * 1000 * 1000, // 3M
//   maxFiles: 10,
// }))
graphqlRouter.all(config.GRAPHQL_PATH, graphqlHttp(option));

export { graphqlRouter };
