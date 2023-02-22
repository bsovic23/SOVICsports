// Imports
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
// 0. General
import Header from './components/Header';
import Footer from './components/Footer';
// 1. All Star
import NbaEntries from './components/NbaAllStar/NbaAllStarEntries';
import NbaEntry from './components/NbaAllStar/NbaAllStarCreateEntry';
// 2. NBA Playoffs
import NbaPlayoffsEntry from './components/NbaPlayoffs/NbaPlayoffsCreateEntry';
import NbaPlayoffsEntries from './components/NbaPlayoffs/NbaPlayoffsEntries';
import NbaPlayoffsStandings from './components/NbaPlayoffs/NbaPlayoffsStanding';

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
                path="/nbaPlayoffs"
                element={<NbaPlayoffs />}
                />
                <Route
                path="/nbaPlayoffsEntry"
                element={<NbaPlayoffsEntry />}
                />
                <Route
                path="/nbaPlayoffsEntries"
                element={<NbaPlayoffsEntries />}
                />
                <Route
                path="/nbaPlayoffsEntries"
                element={<NbaPlayoffsEntries />}
                />
                <Route
                path="/nbaPlayoffsStandings"
                element={<NbaPlayoffsStandings />}
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
