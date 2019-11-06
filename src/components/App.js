import React from "react";
import "../styles/app.scss";
import Map from "./Map";
import Header from "./Header";
import Footer from './Footer'
import SearchBox from './SearchBox'
import getDataFromServer from "../service/getDataFromServer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earthquakes: [],
      selectedPin: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getDataFromServer().then(earthquakes => {
      this.setState({ earthquakes });
    });
    // this.searchBox = new google.maps.places.SearchBox(input);
  }

  handleClick = id => {
    this.setState({
      selectedPin: this.state.earthquakes.find(item => item.id === id)
    });
  };

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__container">
          <SearchBox onChange={this.handleChange} value={this.value}/>
          <Map
            earthquakes={this.state.earthquakes}
            handleClick={this.handleClick}
            selected={this.state.selectedPin}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
