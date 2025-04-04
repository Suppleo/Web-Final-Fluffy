import { createSchema } from "graphql-yoga";
import { GraphQLError } from "graphql";
import _ from "lodash";

const typeDefs = `
   type Query {
      hello: String
   }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context, info) => {
      if (!_.has(context, "secret")) {
        return new GraphQLError("A secret is required.");
      }

      return `Hello World! ${context.secret}`;     
    },
  },
};

export const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});