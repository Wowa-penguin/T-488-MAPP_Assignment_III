export const getCinemaMovies = (movies: any[], cinemaId: number) => {
    const filtered = movies.filter((movie) =>
      movie.showtimes.some((s: any) => s.cinema.id === cinemaId)
    );
  
    const map = new Map<number, any>();
    filtered.forEach((movie) => {
      if (!map.has(movie.id)) {
        map.set(movie.id, movie);
      }
    });
  
    return Array.from(map.values());
  };
  