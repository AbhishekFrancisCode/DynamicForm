import axios, { AxiosResponse } from 'axios';
import { CountryDto } from '../model/countryList';
const baseURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10';
const headers = {
  'X-RapidAPI-Key': add rapid API key,
  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
}

const axiosClient = axios.create();

const responseBody = (response: AxiosResponse) => response.data;
const requests = {
  get: (url: string) => axiosClient.get(url,{headers}).then(responseBody),
};
export const Country = {
  getCountryList: (): Promise<CountryDto> => requests.get(baseURL),
};