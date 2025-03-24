import axios from 'axios';

const MAIN_URL = 'https://petstore.swagger.io/v2/pet/findByStatus'

const getTest= async () => {
    const params = {
        'status': 'available'
    }
    const res = await axios.get<any>(`${MAIN_URL}`, {params});
    return res.data;
  };  
const postTest= async () => {
    const data = {
        'status': 'available'
    }
    const res = await axios.post(`${MAIN_URL}`, data);
    return res.status;
  };  
  
  export const userService = {
    getTest,
    postTest,
  };
  