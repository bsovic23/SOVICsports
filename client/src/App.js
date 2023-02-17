// Imports
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
import Header from './components/Header';
import Footer from './components/Footer';
import NbaEntries from './components/NbaAllStar/NbaAllStarEntries';
import NbaEntry from './components/NbaAllStar/NbaAllStarCreateEntry';

// Page Imports
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Error from './pages/Error';
import History from './pages/History';
import NbaAllStar from './pages/NbaAllStar';
import NbaPlayoffs from './pages/NbaPlayoffs';


// Establish connection to back end server graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Application

function App() {
  return (
    <ApolloProvider client={client}>
    <body>
      <Router>
        <div>
          <Header />
            <div>
              <Routes>
                <Route
                path="/"
                element={<Homepage />}
                />
                <Route
                path="/profile"
                element={<Profile />}
                />
                <Route
                path="/nbaAllStar"
                element={<NbaAllStar />}
                />
                <Route
                path="/nbaEntries"
                element={<NbaEntries />}
                />
                <Route
                path="/nbaEntry"
                element={<NbaEntry />}
                />
                 <Route
                path="/history"
                element={<History />}
                />
                <Route
                path="/nbaplayoffs"
                element={<NbaPlayoffs />}
                />
                <Route
                path="*"
                element={<Error />}
                />
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
      </body>
    </ApolloProvider>
  );
}

export default App;
