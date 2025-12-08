import axios from 'axios';

const getMoves = async () => {
    const response = await axios.get('https://api.kvikmyndir.is/movies', {
        params: {
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5MzE3OTc3ZWM4M2ExYjY1YTQ3OWQ3ZCIsImlhdCI6MTc2NTIwMDUyNSwiZXhwIjoxNzY1Mjg2OTI1fQ.rQGzRRmwAOfmteX35U-oDeNMSNb-LhcYTDlpGv-dDDs',
        },
    });
    console.log(response);
    return response;
};

export default getMoves;
