import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main_page from './Pages/Main_page'
import Product_page from './Pages/Product_page'
import About_page from './Pages/About_page'
import Police_page from './Pages/Police_page'

class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        show: false
    }
    this.toogleShow = this.toogle.bind(this)
  }
  toogle(e) {
    const { show } = this.state;

    window.scrollTo(0,0);
      this.setState({
        show: !show,
      })
  }

  render() {
    const { show } = this.state;
    const { toogleShow } = this;
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Main_page />
          </Route>
          <Route path="/product/:category/:id" >
            <Product_page show={show} toogleShow={toogleShow} />
          </Route>
          <Route path="/about">
            <About_page  show={show} toogleShow={toogleShow} />
          </Route>
          <Route path="/police" >
            <Police_page />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
