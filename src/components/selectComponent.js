import React from "react";

const SelectComponent = ({options, searchOptions, handleChange}) => {
  
  return (
    <div class="container col-12">
 
 <input type='text'
      onChange={(e) => { handleChange(e.target.value) }} />
    <select className="btn" onChange={(e) => handleChange(e.target.value)}>

    {
      options.map((option) => {
        return <option value={option.value}>{option.name}</option>;
      })
    }
     </select>
     </div>
  )
}

export default SelectComponent;