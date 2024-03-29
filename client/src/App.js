// Imports
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
// 0. General
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './components/Admin';
// 1. All Star
import NbaEntries from './components/NbaAllStar/NbaAllStarEntries';
import NbaEntry from './components/NbaAllStar/NbaAllStarCreateEntry';
// 2. NBA Playoffs
import NbaPlayoffsEntry from './components/NbaPlayoffs/NbaPlayoffsCreateEntry';
import NbaPlayoffsEntries from './components/NbaPlayoffs/NbaPlayoffsEntries';
import NbaPlayoffsStandings from './components/NbaPlayoffs/NbaPlayoffsStanding';
// 3. Bowl Challenge
import BowlChallengeEntry from './components/BowlChallenge/BowlChallengeCreateEntry';
import BowlChallengeEntries from './components/BowlChallenge/BowlChallengeEntries';
import BowlChallengeStandings from './components/BowlChallenge/BowlChallengeStandings';
//4. NFL Playoffs Challenge
import NflPlayoffsEntry from './components/NflPlayoffs/NflPlayoffsCreateEntry';
import NflPlayoffsEntries from './components/NflPlayoffs/NflPlayoffsEntries';
import NflPlayoffsStandings from './components/NflPlayoffs/NflPlayoffsStandings';
// Page Imports
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Error from './pages/Error';
import History from './pages/History';
import NbaAllStar from './pages/NbaAllStar';
import NbaPlayoffs from './pages/NbaPlayoffs';
import MarchMadness from './pages/MarchMadness';
import BowlChallenge from './pages/BowlChallenge';
import OverallStandings from './pages/OverallStandings';
import Comment from './pages/Comment';
import ApplicationUpdates from './pages/ApplicationUpdates';
import NflPlayoffs from './pages/NflPlayoffs';

// Establish connection to back end server graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Routes

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/Admin", element: <Admin />},
  { path: "/nbaAllStar", element: <NbaAllStar />},
  { path: "/nbaEntries", element: <NbaEntries />},
  { path: "/nbaEntry", element: <NbaEntry />},
  { path: "/marchMadness", element: <MarchMadness />},
  { path: "/nbaPlayoffs", element: <NbaPlayoffs />},
  { path: "/nbaPlayoffsEntry", element: <NbaPlayoffsEntry />},
  { path: "/nbaPlayoffsEntries", element: <NbaPlayoffsEntries />},
  { path: "/nbaPlayoffsStandings", element: <NbaPlayoffsStandings />},
  { path: "/history", element: <History />},
  { path: "/bowlChallenge", element: <BowlChallenge />},
  { path: "/bowlChallengeEntry", element: <BowlChallengeEntry />},
  { path: "/bowlChallengeEntries", element: <BowlChallengeEntries />},
  { path: "/bowlChallengeStandings", element: <BowlChallengeStandings />},
  { path: "/overallStandings", element: <OverallStandings />},
  { path: "/comment", element: <Comment />},
  { path: "/applicationUpdates", element: <ApplicationUpdates />},
  { path: "/nflPlayoffs", element: <NflPlayoffs />},
  { path: "/nflPlayoffsEntry", element: <NflPlayoffsEntry />},
  { path: "/nflPlayoffsEntries", element: <NflPlayoffsEntries />},
  { path: "/nflPlayoffsStandings", element: <NflPlayoffsStandings />},
  { path: "*", element: <Error />}
];

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
                {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
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
