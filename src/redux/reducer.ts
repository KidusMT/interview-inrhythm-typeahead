import { Reducer } from 'redux';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
}

const initialState: ISampleReducerState = {
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */


    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */


    default:
      return state;
  }
};
