import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const SelectComponent = ({options, searchOptions, handleChange}) => {

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Greetings from GeeksforGeeks!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={options}
        renderInput={(options) => (
          <TextField {...options.value}
            onChange={handleChange}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}


export default SelectComponent;