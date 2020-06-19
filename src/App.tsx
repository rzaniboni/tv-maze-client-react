import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';
import { Series } from './model/series';
import TvMazeResults from './components/TvMazeResults';

export const App = () => {
  const [text, setText] = useState<string>('soprano');
  const [result, setResult] = useState<Series[]>([]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`).then(
      (res) => {
        setResult(res.data);
      }
    );
  };

  const itemClickHandler = (series: Series) => {
    window.open(series.show.url);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search TV Series"
          value={text}
          onChange={onChangeHandler}
        />
      </form>
      <TvMazeResults result={result} itemClick={itemClickHandler} />
    </div>
  );
};

export default App;
