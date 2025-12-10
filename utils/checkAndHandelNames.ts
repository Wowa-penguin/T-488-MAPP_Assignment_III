import { Actor, Director, OmdbEntry } from '@/models/movies';

type NamesParams = {
    actors?: Actor[];
    directors?: Director[];
    omdb: OmdbEntry;
};

type NamesResult = {
    actors?: string[];
    directors?: string[];
    writer?: string[];
};

export const checkNames = ({ actors, directors, omdb }: NamesParams) => {
    const payload: NamesResult = {};

    if (actors && actors.length > 0) {
        payload.actors = actors.map((actor) => actor.name);
    } else {
        payload.actors = omdb.Actors.split(',').map((name) => name.trim());
    }

    if (directors && directors.length > 0) {
        payload.directors = directors.map((director) => director.name);
    } else {
        payload.directors = omdb.Director.split(',').map((name) => name.trim());
    }

    if (omdb && omdb.Writer) {
        payload.writer = omdb.Writer.split(',').map((name) => name.trim());
    }

    return payload;
};
