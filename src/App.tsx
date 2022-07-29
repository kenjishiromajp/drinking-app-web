import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AVAILABLE_GAMES from './constants/availableGames';
import GameSelectionPage from './pages/GameSelectionPage/GameSelectionPage';
import HomePage from './pages/HomePage/HomePage';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/game-selection">
          <Route index element={<GameSelectionPage />} />
          {AVAILABLE_GAMES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
