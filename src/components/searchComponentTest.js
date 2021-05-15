
import React, {useState} from "react";
import Select from 'react-select';

const SearchOptions = ({options, searchOptions, updateChanges}) =>  {
  const [state, setState] = useState({selectedOption: ''})

  const  handleChange = (selectedOption) => {
    setState({ selectedOption });
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }
    const { selectedOption } =  state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={handleChange}
        options = {options.map((option) => {
          return {value: option.value, label: option.name}  
        })}
      
      />
    );
}

export default SearchOptions;