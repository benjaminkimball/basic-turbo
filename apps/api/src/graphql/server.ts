import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { schema } from "./schema";

interface CreateApolloServerArgs {
  plugins?: ApolloServerPlugin[];
}

export function createApolloServer({
  plugins,
}: CreateApolloServerArgs = {}): ApolloServer {
  const server = new ApolloServer({
    plugins,
    schema,
    status400ForVariableCoercionErrors: true,
  });

  return server;
}
