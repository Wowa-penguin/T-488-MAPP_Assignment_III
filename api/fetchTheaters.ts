import type { Theater } from '@/models/theaters';
import axios from 'axios';
import getToken from './getToken';

export const fetchTheatersApi = async (): Promise<Theater[]> => {
    const token = await getToken();

    const response = await axios.get<Theater[]>(
        'https://api.kvikmyndir.is/theaters',
        {
            headers: {
                'x-access-token': token,
            },
        }
    );

    return response.data;
};
