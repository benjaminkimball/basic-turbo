import { User } from "@prisma/client";
import { findUserById } from "../../users";
import { builder } from "../builder";

const UserObject = builder.objectRef<User>("User");

UserObject.implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.field({ type: "Email", resolve: ({ email }) => email }),
    givenName: t.exposeString("givenName", { nullable: true }),
    familyName: t.exposeString("familyName", { nullable: true }),
  }),
});

builder.queryField("user", (t) =>
  t.field({
    type: UserObject,
    args: { id: t.arg.id({ required: true }) },
    nullable: true,
    resolve: async (_parent, { id }) => findUserById(id),
  }),
);
