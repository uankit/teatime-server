import { imdbIds } from "./constants/imdbId";

export const getTenRandomIMDBId = (): string[] => {
  const results: string[] = []
  for (let index = 0; index < 10; index++) {
    const id = imdbIds[(Math.floor(Math.random() * imdbIds.length))]
    results.push(id)
  }
  return results;
};

getTenRandomIMDBId()