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
    } else if (omdb.Actors) {
        payload.actors = omdb.Actors.split(',').map((name) => name.trim());
    } else {
        payload.actors = ['None'];
    }

    if (directors && directors.length > 0) {
        payload.directors = directors.map((director) => director.name);
    } else if (omdb.Director) {
        payload.directors = omdb.Director.split(',').map((name) => name.trim());
    } else {
        payload.directors = ['None'];
    }

    if (omdb && omdb.Writer) {
        payload.writer = omdb.Writer.split(',').map((name) => name.trim());
    } else {
        payload.writer = ['None'];
    }

    return payload;
};
