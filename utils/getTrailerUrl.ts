export function getTrailerUrl(movie: any): string | null {
    if (!movie || !Array.isArray(movie.trailers)) {
        return null;
    }

    for (const trailerGroup of movie.trailers) {
        if (!trailerGroup || !Array.isArray(trailerGroup.results)) {
            continue;
        }

        // TMDb-like results typically look like:
        // { key: 'abc123', site: 'YouTube', type: 'Trailer', ... }
        const youtubeTrailer = trailerGroup.results.find((result: any) => {
            if (!result) return false;

            const site = result.site;
            const type = result.type;
            const key = result.key;

            return (
                typeof key === 'string' &&
                site === 'YouTube' &&
                (type === 'Trailer' || type === 'Teaser')
            );
        });

        if (youtubeTrailer) {
            return `https://www.youtube.com/embed/${youtubeTrailer.key}`;
        }
    }
    
    return null;
}