import React from "react";

const Option = (options) => {
  return (
    <div >
      <select className="btn">
        {options.map((option) => {
          return <option value={option.value}>{option.name}</option>;
        })
        }
      </select>
    </div>
  );
}

const SearchPage = ({ options }) => {

  const [state, setState] = React.useState();

  setState(options);

  const searchList = (event) => {
    var updatedList = this.state.fullList;

    console.log(updatedList);

    var currentVal = event.target.value;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(currentVal.toLowerCase()) !== -1;
    });
    setState(updatedList)
  }

  return (
    <div >
      <input className="btn" type="text" placeholder="Search" onChange={(e) => searchList(e.target.value)} />
      <Option list={this.state.list} />
    </div>
  );
}

export default SearchPage;