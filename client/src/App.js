// Imports
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Error from './pages/Error';

// NBA Page Imports
import NbaAllStar from './pages/NbaAllStar';
import NbaEntries from './components/NbaAllStar/NbaAllStarEntries';
import NbaEntry from './components/NbaAllStar/NbaAllStarCreateEntry';

// History Imports
import History from './components/History';

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
                path="/login"
                element={<Login />}
                />
                <Route
                path="/signup"
                element={<Signup />}
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
                path="*"
                element={<Error />}
                />
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
