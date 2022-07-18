import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from "graphql-tag"

const link = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" })
const cache = new InMemoryCache()
const client = new ApolloClient({
    link,
    cache
})

// const ALL_CHARACTERS = gql`
// query allcharacters{
//     characters{
//       results{
//         name,
//         id
//       }
//     }
//   }
// `
// client.query({ ALL_CHARACTERS })
//     .then(result => console.log(result))

export default client;