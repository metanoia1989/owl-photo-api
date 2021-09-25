import Router from "koa-router";
import graphqlHttp from 'koa-graphql';
import { applyMiddleware } from "graphql-middleware";

import { config } from "../config";
import { graphqlSchema } from "../graphql";
import { verifyToken } from "@src/services/auth";
// import { graphqlUploadKoa } from 'graphql-upload'
import { BaseContext } from 'koa'
import { UserModel } from "@src/entities/user.model";
import { User } from "@src/interfaces/user.interfaces";
import { logInput } from "@src/middleware/logInput";
import { logResult } from "@src/middleware/logResult";
import { permissions } from "@src/middleware/permissions";

const graphqlRouter = new Router()

const schema = applyMiddleware(
  graphqlSchema,
  logInput,
  permissions,
  logResult,
)

const option: graphqlHttp.Options = async (request, _response, ctx)  => {
  let user: User | null = null;
  if (request.headers.authorization && request.headers.authorization.split(' ').length == 2) {
    let token = <string> request.headers.authorization.split(' ').pop()
    let { id } = verifyToken(ctx as BaseContext, token, 'access')
    user = await UserModel.findById(id)
  }

  return {
    schema: schema,
    graphiql: true,
    pretty: true,
    rootValue: {
      hello() {
        return 'hello world'
      }
    },
    context: { user: user }
  }
};

// graphqlRouter.use(graphqlUploadKoa({
//   maxFileSize: 3 * 1000 * 1000, // 3M
//   maxFiles: 10,
// }))
graphqlRouter.all(config.GRAPHQL_PATH, graphqlHttp(option));

export { graphqlRouter };
