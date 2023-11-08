import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { idArg, nonNull, objectType, queryField } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");

    t.email("email");

    t.datetime("createdAt");
    t.datetime("updatedAt");
  },
});

export const user = queryField("user", {
  type: User.name,
  args: { id: nonNull(idArg()) },
  resolve(_src, { id }, ctx) {
    return ctx.db.user.findUnique({ where: { id } });
  },
});

export const users = queryField((t) => {
  t.connectionField("users", {
    type: User.name,
    resolve(_root, args, ctx) {
      return findManyCursorConnection(
        (args) => ctx.db.user.findMany({ ...args }),
        () => ctx.db.user.count(),
        args,
      );
    },
  });
});
