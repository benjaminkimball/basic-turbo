import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { IncomingMessage, ServerResponse } from "http";
import { schema } from "./schema";

export interface Context {
  db: PrismaClient;
  req: IncomingMessage;
  res: ServerResponse;
}

interface CreateApolloServerArgs {
  plugins?: ApolloServerPlugin[];
}

export function createApolloServer({
  plugins,
}: CreateApolloServerArgs = {}): ApolloServer<Context> {
  const server = new ApolloServer<Context>({
    plugins,
    schema,
    status400ForVariableCoercionErrors: true,
  });

  return server;
}
