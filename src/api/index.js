import axios from 'axios';

const API = axios.create({baseURL:`https://${process.env.REACT_APP_URL}`});

export const getAllBreweries = () => API.get('/');
export const getBrewery = (id) => API.get(`/${id}`);