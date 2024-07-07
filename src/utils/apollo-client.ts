import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "no-cache" },
      query: { fetchPolicy: "no-cache" },
    },
    link: new HttpLink({
      uri: "http://127.0.0.1:1337/graphql"
    }),
  });


export default client;