import axios from 'axios';

export const localRegister = ({ custEmail, custPasswd }) =>
  axios.post('/api/customer/register', { custEmail, custPasswd });

export const localLogin = ({ custEmail, custPasswd }) => axios.post('/api/customer/login', { custEmail, custPasswd });
