import React, { useState } from 'react';

import './typeahead.css';

export interface ITypeahead {
  options: string[];
  onChange: (choice: string) => void;
}

export const Typeahead = (props) => {
  const { onChange, options } = props;
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    const filtered = text
      ? options.filter((option) => option.toLowerCase().includes(text.toLowerCase()))
      : [];
    setFilteredOptions(filtered);
  };

  const onClick = (choice: string) => {
    setSearchText(choice);
    setFilteredOptions([]);
    onChange(choice);
  };

  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        value={searchText}
      />
      <ul>
        {filteredOptions.map((option) => {
          return (
            <li key={option}>
              <a onClick={() => onClick(option)}>{option}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
