import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coins from "./coins";
import News from "./news";
import Markets from "./markets";

class Header extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    console.log(this.state);
    const activeItem = this.state.activeItem;
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <Menu>
              <Route path="/">
                <Menu.Item header>CryptoCurrency</Menu.Item>
              </Route>
              <Route path="/news" component={News}>
                <Menu.Item
                  name="news"
                  active={activeItem === "news"}
                  onClick={this.handleItemClick}
                />
              </Route>
              <Route path="/market" component={Coins}>
                <Menu.Item
                  name="market"
                  active={activeItem === "market"}
                  onClick={this.handleItemClick}
                />
              </Route>
              <Route path="/coins" component={Markets}>
                <Menu.Item
                  name="coins"
                  active={activeItem === "coins"}
                  onClick={this.handleItemClick}
                />
              </Route>
            </Menu>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default Header;
