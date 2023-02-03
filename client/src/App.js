// Imports
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Main Components Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Homepage from './components/Homepage';
import NbaAllStar from './components/NbaAllStar';

// Establish connection to back end server graphql endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// App 

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />

        <div class="container">
            <Homepage />
        </div>

        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
