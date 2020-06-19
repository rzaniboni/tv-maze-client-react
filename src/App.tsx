import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';

export const App = () => {
  const [text, setText] = useState<string>('soprano');
  const [result, setResult] = useState([]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Axios.get(`http://api.tvmaze.com/search/shows?q=${text}`).then((res) => {
      setResult(res.data);
    });
  };
  return (
    <div className="App">
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search TV Series"
          value={text}
          onChange={onChangeHandler}
        />
      </form>
      {result.length} results
    </div>
  );
};

export default App;
