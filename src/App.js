import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Markets from "./components/markets";

class App extends Component {
  state = {
    activeItem: "",
    market: [], // List all supported coins price, market cap, volume, and market related data
    activeStatus: false
  };

  async componentDidMount() {
    let url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      market: data
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header state={this.state} />
        <Markets market={this.state.market} />
      </React.Fragment>
    );
  }
}

export default App;
