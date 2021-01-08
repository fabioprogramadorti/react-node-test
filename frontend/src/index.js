import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'

import { Auth0Provider } from "@auth0/auth0-react";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const cache = new InMemoryCache({})

const client = new ApolloClient({
  link: httpLink,
  cache
})

ReactDOM.render(
  <Auth0Provider
    domain="dev-bjo1lgzg.us.auth0.com"
    clientId="ZWXX2Rbods3p2WTXRCTh75VhTJPgo93D"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
