import React from "react";
import "../styles/app.scss";
import Map from "./Map";
import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import getDataFromServer from "../service/getDataFromServer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earthquakes: [],
      selectedPin: {},
      input: "",
      center: {
        lat: 59.95,
        lng: 30.33
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getDataFromServer().then(earthquakes => {
      this.setState({ earthquakes });
    });
  }

  handleClick = id =>
    this.setState({
      selectedPin: this.state.earthquakes.find(item => item.id === id)
    });

  handleChange = e => this.setState({ input: e.target.value });

  centerMap = () => {
    const place = this.state.earthquakes.find(item =>
      item.place.toLowerCase().includes(this.state.input.toLocaleLowerCase())
    );
    return place ? place.coordinates : null;
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__container">
          <SearchBox onchange={this.handleChange} value={this.value} />
          <Map
            earthquakes={this.state.earthquakes}
            handleClick={this.handleClick}
            selected={this.state.selectedPin}
            center={this.centerMap()}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
