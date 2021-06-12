import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";



const SelectComponent = ({ items, placeholder, handleChange }) => {
  const [value, setValue] = React.useState(null);
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(`Handle on Select: ${item}`);
    handleChange(item.name);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      "& > span": {
        marginRight: 10,
        fontSize: 18,
        backgroundColor: "white",
      },

      textField: {
        color: "white !important",
      },
    },
  });

  const classes = useStyles();

  return (
    <Autocomplete
      freeSolo
      className={classes.option}
      disableClearable
      value={value}
      options={items.map((option) => option.name)}
      onChange={(event, newValue) => handleChange(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder}
          margin="normal"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
            color: "primary",
          }}
        />
      )}
    />
  );
};

export default SelectComponent;
