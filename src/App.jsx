import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Pages from './pages'
import { ApolloClient, ApolloProvider, createHttpLink, gql } from "@apollo/client"
import { uri } from './keys.json'
import { cache } from './cache'
import { setContext } from 'apollo-link-context'

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`

const httpLink = createHttpLink({
  uri
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
  resolvers: {},
  typeDefs
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  )
}

export default App