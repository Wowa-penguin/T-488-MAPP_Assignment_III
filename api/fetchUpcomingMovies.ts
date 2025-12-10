import type { Movie } from '@/models/movies';
import axios from 'axios';
import getToken from './getToken';

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
    const token = await getToken();

    const response = await axios.get<Movie[]>(
        'https://api.kvikmyndir.is/upcoming',
        {
            params: { token },
        }
    );

    return response.data;
};
