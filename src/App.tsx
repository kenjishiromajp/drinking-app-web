import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameSelectionPage from './pages/GameSelectionPage/GameSelectionPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game-selection" element={<GameSelectionPage />} />
    </Routes>
  );
}

export default App;
