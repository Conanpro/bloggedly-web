import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Pages from './pages'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client"
import { uri } from './keys.json'

const client = new ApolloClient({
  link: new HttpLink({
    uri
  }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Pages />
  </ApolloProvider>
)

export default App