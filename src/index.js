import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import client from './component/client';
import { ApolloProvider } from "@apollo/react-hooks"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


