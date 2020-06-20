import React, { ChangeEvent, useState } from 'react';

export interface TvMazeSearchProps {
  search: (text: string) => void;
}

const TvMazeSearch: React.FC<TvMazeSearchProps> = ({ search }) => {
  const [text, setText] = useState<string>('soprano');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(text);
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        type="text"
        autoFocus
        placeholder="Search TV Series"
        value={text}
        onChange={onChangeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TvMazeSearch;
