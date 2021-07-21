import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Main website</h1>
const News = () => <h1>News</h1>
const Contact = () => <h1>Contact</h1>

const ErrorPage = () => <h1>Site doesn't exist</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact activeClassName="home_selected" activeStyle={{ backgroundColor: 'gray', letterSpacing: 7 }}>Start</NavLink></li>
                <li><NavLink to="/news" activeClassName="news_selected">News</NavLink></li>
                <li><NavLink to="/contact" activeClassName="contact_selected">Contact</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
