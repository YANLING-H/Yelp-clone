import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term ,location, sortBy)
    .then(businesses => {
      this.setState({businesses: businesses})
    })
    .catch (err => {
      alert("There is no such business or address. Please enter another address or business name again");}
    )
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        {/* {console.log('this is value of businesses', this.businesses)} */}
        <BusinessList businesses={this.state.businesses}/> 
      </div>
    );
  }
}

export default App;
