import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as scalars from "./scalars";
import * as users from "./users";

const rootDir = process.cwd();

export const schema = makeSchema({
  types: [scalars, users],
  contextType: {
    module: join(rootDir, "src/graphql/index.ts"),
    export: "Context",
    alias: "ctx",
  },
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  outputs: {
    schema: join(rootDir, "generated/schema.graphql"),
    typegen: join(rootDir, "generated/graphql.d.ts"),
  },
  plugins: [
    connectionPlugin({
      extendConnection: {
        totalCount: { type: "Int", requireResolver: false },
      },
    }),
  ],
});
