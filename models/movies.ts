export interface Movie {
    _id: string;
    id: number;
    title: string;
    actors_abridged: Actor[];
    alternativeTitles: string;
    certificate: Certificate;
    certificateIS: string;
    certificateImg: string;
    directors_abridged: Director[];
    durationMinutes: number;
    genres: Genre[];
    ids: ExternalIds;
    omdb: OmdbEntry[];
    plot: string;
    poster: string;
    ratings: Ratings;
    showtimes: Showtime[];
    trailers: Trailer[];
    year: string;
}

export interface Actor {
    name: string;
}

export interface Director {
    name: string;
}

export interface Certificate {
    is: string;
    color: string;
    number: string;
}

export interface Genre {
    ID: number;
    Name: string;
    NameEN: string;
}

export interface ExternalIds {
    imdb: string;
    rotten: string;
    tmdb: string;
}

export interface OmdbEntry {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: OmdbRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    tomatoMeter: string;
    tomatoImage: string;
    tomatoRating: string;
    tomatoReviews: string;
    tomatoFresh: string;
    tomatoRotten: string;
    tomatoConsensus: string;
    tomatoUserMeter: string;
    tomatoUserRating: string;
    tomatoUserReviews: string;
    tomatoURL: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface OmdbRating {
    Source: string;
    Value: string;
}

export interface Ratings {
    imdb: string;
    rotten_audience: string;
    rotten_critics: string;
}

export interface Showtime {
    cinema: Cinema;
    cinema_name: string;
    schedule: ShowtimeSchedule[];
}

export interface Cinema {
    id: number;
    name: string;
}

export interface ShowtimeSchedule {
    time: string;
    purchase_url: string;
    info: string;
}

export interface Trailer {}
