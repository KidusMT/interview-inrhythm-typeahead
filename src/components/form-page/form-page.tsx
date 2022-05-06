import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../redux';

import { Typeahead } from '../typeahead/typeahead';

export const FormPage = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IAppState) => state);
   *    const dispatch = useDispatch();
   */

  useEffect(() => {
    (async () => {
      // TODO: move this into actions/redux
      const url = `/api/countries.json`;
      const response = await axios.get(url);  
      setCountries(response.data);  
    })();
  }, []);

  const onChange = (choice: string) => {
    // TODO: move this into actions/redux
    setCountry(choice);
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
