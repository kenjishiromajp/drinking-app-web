import { Route, Routes } from 'react-router-dom';
import './App.css';
import AVAILABLE_GAMES from './constants/availableGames';
import GameSelectionPage from './pages/GameSelectionPage/GameSelectionPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/game-selection">
        <Route index element={<GameSelectionPage />} />
        {AVAILABLE_GAMES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
