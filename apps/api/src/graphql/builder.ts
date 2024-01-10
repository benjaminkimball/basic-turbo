import SchemaBuilder from "@pothos/core";
import { EmailAddressResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: {
    Email: {
      Input: string;
      Output: string;
    };
    ID: {
      Input: string;
      Output: string;
    };
  };
}>({});

builder.queryType();

builder.addScalarType("Email", EmailAddressResolver, {});
