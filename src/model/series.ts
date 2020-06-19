export interface Series {
  show: Show;
  score: number;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  image: {
    medium: string;
  };
}
