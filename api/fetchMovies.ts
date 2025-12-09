import type { Movie } from '@/models/movies'; // your Movie type from before
import axios from 'axios';
import getToken from './getToken';

export const fetchMoviesApi = async (): Promise<Movie[]> => {
    const token = await getToken();

    const response = await axios.get<Movie[]>(
        'https://api.kvikmyndir.is/movies',
        {
            params: { token },
        }
    );

    return response.data;
};
