import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => <h1>Main website</h1>
const News = () => <h1>News</h1>
const Contact = () => <h1>Contact</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
