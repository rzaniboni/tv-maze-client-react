import { useState } from 'react';
import { Series, Show } from '../model/series';
import Axios from 'axios';

export function useTvMaze() {
  const [details, setDetails] = useState<Show | null>(null);
  const [result, setResult] = useState<Series[]>([]);

  const searchHandler = (text: string) => {
    Axios.get<Series[]>(`https://api.tvmaze.com/search/shows?q=${text}`).then(
      (res) => {
        setResult(res.data);
      }
    );
  };

  const itemClickHandler = (series: Series) => {
    // window.open(series.show.url);
    setDetails(series.show);
  };

  const closeModal = () => {
    setDetails(null);
  };

  return {
    series: result,
    search: searchHandler,
    itemClick: itemClickHandler,
    details,
    closeModal,
  };
}
