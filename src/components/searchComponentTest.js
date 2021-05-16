
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
        style={{"width":"100"}}
        value={selectedOption}
        onChange={(e) =>handleChange(e.target.value)}
        options = {options}
      
      />
    );
}

export default SearchOptions;