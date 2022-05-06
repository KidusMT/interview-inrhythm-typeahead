import axios from 'axios';
import { Reducer } from 'redux';

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */


//   TODO:
//   - Implement getCountries
//   - Use Axios or fetch to get the countries from `/api/countries.json`
//   - Store the result in the reducer
 
 
//   TODO:
//   - Implement setCountry
//   - Store the country in the reducer



/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export interface IAppState {
//    TODO:
//    - Implement countries as an array of strings
//    - Implement country as a string
}

// TODO: Initialize app state
const initialState: IAppState = {
};

export const reducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    //    TODO:
    //    - Implement case COUNTRIES_RECEIVED
    //    - Store the countries in the reducer


    //    TODO:
    //    - Implement case SET_COUNTRY
    //    - Store the country in the reducer
    default:
      return state;
  }
};