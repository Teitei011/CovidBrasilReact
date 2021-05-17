import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import React from 'react';




const SelectComponent = ({ items, handleChange }) => {

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };


  const handleOnSelect =  (item) => {
    console.log(`Handle on Select: ${item}`);
    handleChange(item.name);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };



  return (
    <div>
      <header  >
        <div style={{ height: 20, width: 400, marginBottom: 0, alignItems: "center" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            styling={{ zIndex: 2 }} // To display it on top of the search box below
          />
        </div>
      </header>
    </div>
  );
}

export default SelectComponent;