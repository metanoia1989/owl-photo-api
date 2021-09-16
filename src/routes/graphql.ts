import Router from "koa-router";
import graphqlHttp from 'koa-graphql';
import { config } from "../config";

const graphqlRouter = new Router()

graphqlRouter.all(
  config.GRAPHQL_PATH,
  graphqlHttp({
    schema: '',
    graphiql: true,
  })
);

export { graphqlRouter };
