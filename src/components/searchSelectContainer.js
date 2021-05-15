import React  from "react";
import { NavItem } from "react-bootstrap";

class Option extends React.Component {
  render () {
    return(
      <div >
    <select className="btn">
     {this.props.list.map(function(item,index){
     return <option value={item}>{item}</option>     
        })
     } 
     </select>
     </div>
    );
  }
}

class SearchPage extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = {fullList: [ 
      "Car",
      "dample",
      "maple",
      "sapple",
      "Semma-file",
      "1212 3434"
    ],
                 list: []};
     this.searchList = this.searchList.bind(this);
  }
  
  componentWillMount(){
    this.setState({list: this.state.fullList})
  } 

  searchList(event) {
    var updatedList = this.state.fullList;
    
    console.log(updatedList);
    
    var currentVal = event.target.value;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(currentVal.toLowerCase()) !== -1;
    });
    this.setState({list: updatedList})
  }
    
  render() {
    return (
      <div >
      <input className="btn" type="text" placeholder="Search" onChange={this.searchList}/>
      <Option list={this.state.list}/>
        </div>
    ); 
  }
  
}


export default SearchPage;