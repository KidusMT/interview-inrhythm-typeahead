import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState, getCountriesAction, setCountryAction, getCountries } from '../../redux';
import { Typeahead } from '../typeahead/typeahead';

export const FormPage = (props) => {
  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IAppState) => state);
   *    const dispatch = useDispatch();
   */
  const { country, countries } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  useEffect(  () => {
    (async () => {
    const countries = await getCountries()
    dispatch(getCountriesAction(countries))
    })();
  }, []);

  const onChange = (choice: string) => {
    if(choice) {
      dispatch(setCountryAction(choice))
    }
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
