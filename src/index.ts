import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { Server } from "http";
import { buildSchema } from "type-graphql";
import Express from "express";

import { HelloURLResolver } from "./resolvers/HelloURL/HelloURLResolver";

export async function startServer(): Promise<Server> {
  const app = Express();

  const schema = await buildSchema({
    resolvers: [HelloURLResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema: schema,
  });

  apolloServer.applyMiddleware({ app, path: "/graphql" });

  const a = new URL("https:www.google.com");

  return app.listen({ port: 4000 }, () => {
    console.log("Server ready at http://localhost:4000/graphql");
  });
}

startServer();
