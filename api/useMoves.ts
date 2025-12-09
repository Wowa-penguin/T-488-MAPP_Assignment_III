import axios from 'axios';
import { useEffect, useState } from 'react';
import getToken from './getToken';

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const req = async () => {
            try {
                const token = await getToken();
                const response = await axios.get(
                    'https://api.kvikmyndir.is/movies',
                    {
                        params: {
                            token,
                        },
                    }
                );
                setMovies(response.data);
            } finally {
                setLoading(false);
            }
        };

        req();
    }, []);

    return { movies, loading };
};

export default useMovies;
