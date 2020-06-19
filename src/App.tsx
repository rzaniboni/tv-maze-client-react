import React from 'react';
import TvMazeResults from './components/TvMazeResults';
import TvMazeSearch from './components/TvMazeSearch';
import { useTvMaze } from './hooks/useTvMaze';
import TvMazeShowDetails from './components/TvMazeShowDetails';

export const App = () => {
  const { series, search, itemClick, details, closeModal } = useTvMaze();

  return (
    <div>
      <TvMazeSearch search={search} />
      <TvMazeResults result={series} itemClick={itemClick} />
      <TvMazeShowDetails show={details} onClose={closeModal} />
    </div>
  );
};

export default App;
