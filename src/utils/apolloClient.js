// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const cache = new InMemoryCache();


// const client = new ApolloClient({
//   // Provide required constructor fields
//   cache: cache,
//   uri: link,

//   // Provide some optional constructor fields
//   name: 'react-web-client',
//   version: '1.3',
//   queryDeduplication: false,
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'cache-and-network',
//     },
//   },
// });


// import { HttpLink } from "@apollo/client";
// import {
//   registerApolloClient,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/experimental-nextjs-app-support";

// const link = `${process.env.REACT_APP_BACKEND_URL}/graphql`

// export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: 'http://127.0.0.1:1337/graphql',
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//     }),
//   });
// });

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://127.0.0.1:1337/graphql"
    }),
  });


export default client;
  // const client = ...

// client
//     .query({
//     query: gql`
//         query{
//             posts {
//                 data {
//                 id
//                 attributes {
//                     Title
//                     Published
//                     Content
//                     Category
//                 }
//                 }
//             }
//         }
//     `,
//     }).then((result) => console.log(result));