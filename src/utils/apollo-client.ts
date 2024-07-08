import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "no-cache" },
      query: { fetchPolicy: "no-cache" },
    },
    link: new HttpLink({
      uri: `${process.env.REACT_APP_BACKEND_URL}/graphql"`
    }),
  });


export default client;