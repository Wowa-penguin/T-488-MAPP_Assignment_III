export function getTrailerUrl(movie: any): string | null {
    const trailers = movie?.trailers;
    if (!Array.isArray(trailers)) return null;

    const allowedTypes = ['Trailer', 'Teaser', 'Featurette'];
    
    const allResults: any[] = [];
    for (const group of trailers) {
        if (group && Array.isArray(group.results)) {
            allResults.push(...group.results);
        }
    }
    
    const youtube = allResults.filter(
        (r) =>
            r &&
            r.site === 'YouTube' &&
            typeof r.key === 'string' &&
            r.key.trim() !== '' &&
            allowedTypes.includes(r.type)
    );

    if (youtube.length === 0) return null;
    
    const rank = (r: any) => {
        const typeRank =
            r.type === 'Trailer' ? 0 : r.type === 'Teaser' ? 1 : 2;
        const officialRank = r.official ? 0 : 1;
        return `${typeRank}-${officialRank}`;
    };

    youtube.sort((a, b) => rank(a).localeCompare(rank(b)));

    return `https://www.youtube.com/watch?v=${youtube[0].key}`;
}
