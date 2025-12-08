import axios from 'axios';

type ResData = {
    message: string;
    success: boolean;
    token: string;
};

const getToken = async () => {
    try {
        const response = await axios.post(
            'https://api.kvikmyndir.is/authenticate',
            {},
            {
                auth: {
                    username: 'Heimir',
                    password: '$%SVU#atUGga$b6JrNSpH#g9Wfv',
                },
            }
        );

        const data: ResData = response.data;

        if (data.success) {
            console.log('Data:', data.token);
        }

        return response.data.token;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
};

export default getToken;
