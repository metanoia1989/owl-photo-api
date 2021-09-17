import Router from "koa-router";
import graphqlHttp from 'koa-graphql';
import { config } from "../config";
import { graphqlSchema } from "../graphql";

const graphqlRouter = new Router()

graphqlRouter.all(
  config.GRAPHQL_PATH,
  graphqlHttp({
    schema: graphqlSchema,
    graphiql: true,
  })
);

export { graphqlRouter };
