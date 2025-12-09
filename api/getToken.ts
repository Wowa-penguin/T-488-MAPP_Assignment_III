import axios from 'axios';

type ResData = {
    message: string;
    success: boolean;
    token: string;
};

const getToken = async (): Promise<string> => {
    const response = await axios.post<ResData>(
        'https://api.kvikmyndir.is/authenticate',
        {},
        {
            auth: {
                username: 'Heimir',
                password: '$%SVU#atUGga$b6JrNSpH#g9Wfv',
            },
        }
    );

    if (!response.data.success) {
        throw new Error(response.data.message || 'Auth failed');
    }

    return response.data.token;
};

export default getToken;
