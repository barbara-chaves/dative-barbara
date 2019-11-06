import React from "react";
import "../styles/app.scss";
import Map from "./Map";
import Details from './Details'
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
      <div className="App">
        <Map earthquakes={this.state.earthquakes} handleClick={this.handleClick}/>
        <Details details={this.state.selectedPin}/>
      </div>
    );
  }
}

export default App;
