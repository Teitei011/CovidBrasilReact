import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { useHistory, useParams } from "react-router-dom";

const SelectComponent = ({ items, placeholder, handleChange }) => {
  const [value, setValue] = React.useState(null);

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
          style={{ "background-color": "white", "border-radius": "2rem" }}
          {...params}
          label={placeholder}
          margin="normal"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
            color: "primary",
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default SelectComponent;
