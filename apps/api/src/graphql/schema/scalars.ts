import { GraphQLDateTime, GraphQLEmailAddress } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const DateTime = asNexusMethod(GraphQLDateTime, "datetime");
export const EmailAddress = asNexusMethod(GraphQLEmailAddress, "email");
