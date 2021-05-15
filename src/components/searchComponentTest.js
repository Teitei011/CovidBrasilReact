
import React from "react";
import Select from 'react-select'


const SearchComponent = ({ data }) => {
  const [state, setState] = React.useState({
    selectOptions: [],
    id: "",
    name: ''
  });


  const options = data.map(d => ({
    "value": d.value,
    "label": d.name

  }))

  setState({ selectOptions: options })


  const handleChange = (e) => {
    setState({ id: e.value, name: e.label })
  }

  const componentDidMount = () => {
    this.getOptions()
  }

  return (
    <div>
      <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
      <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
    </div>
  );
}


export default SearchComponent;