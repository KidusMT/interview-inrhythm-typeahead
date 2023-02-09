import axios from 'axios';
import { Reducer } from 'redux';

const COUNTRIES_RECEIVED = "COUNTRIES RECEIVED"
const SET_COUNTRY = "SET COUNTRY"

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */
export const getCountriesAction = (countries) => {
  return {
    type: COUNTRIES_RECEIVED,
    payload: countries
  }
}

export const setCountryAction = (choice) => {
  return {
    type: SET_COUNTRY,
    payload: setCountry(choice)
  }
}

//   TODO:
//   - Implement getCountries
//   - Use Axios or fetch to get the countries from `/api/countries.json`
//   - Store the result in the reducer

export const getCountries = async () => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);
  return response.data
}
 
 
//   TODO:
//   - Implement setCountry
//   - Store the country in the reducer
const setCountry = (country) => {
  return country
}

/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export interface IAppState {
  countries: string[];
  country: string;
}

// TODO: Initialize app state
const initialState: IAppState = {
  countries: [],
  country: ''
};

export const reducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_RECEIVED:
      return {
        ...state,
        countries: action.payload
      }
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    default:
      return state;
  }
};