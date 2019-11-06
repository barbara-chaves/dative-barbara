import React from "react";
import "../styles/app.scss";
import Map from "./Map";
import Header from "./Header";
import getDataFromServer from "../service/getDataFromServer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earthquakes: [],
      selectedPin: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getDataFromServer().then(earthquakes => {
      this.setState({ earthquakes });
    });
  }

  handleClick = id => {
    this.setState({
      selectedPin: this.state.earthquakes.find(item => item.id === id)
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__container">
          <Map
            earthquakes={this.state.earthquakes}
            handleClick={this.handleClick}
            selected={this.state.selectedPin}
          />
        </div>
      </div>
    );
  }
}

export default App;
