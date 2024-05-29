
export interface Movie {
    title: string,
    year: string,
    genre: string,
    director: string,
    writer: string,
    actors: string,
    plot: string,
    awards: string,
    poster: string
}


export const mapToMoviesData = (data: any): Movie => {
    return {
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        director: data.Director,
        writer: data.Writer,
        actors: data.Actors,
        plot: data.Plot,
        awards: data.Awards,
        poster: data.Poster

    }
}