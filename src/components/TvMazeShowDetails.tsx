import React from 'react';
import { Show } from '../model/series';

interface TvMazeShowDetailsProps {
  show: Show | null;
  onClose: () => void;
}

const TvMazeShowDetails: React.FC<TvMazeShowDetailsProps> = ({
  show,
  onClose,
}) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TvMazeShowDetails;
