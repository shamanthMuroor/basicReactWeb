import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import firebase from 'firebase/app';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALwOTU3F_26s1Q159S9RqzvR7IgTV7HVo",
  authDomain: "fireapp-48dc5.firebaseapp.com",
  databaseURL: "https://fireapp-48dc5.firebaseio.com",
  projectId: "fireapp-48dc5",
  storageBucket: "fireapp-48dc5.appspot.com",
  messagingSenderId: "263031776215",
  appId: "1:263031776215:web:e731de86119cafb4"
};
firebase.initializeApp(firebaseConfig);

export let db=firebase.firestore();

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route>
            <Nav />
              <div className="container">
                <Switch>
                    <Route path='/' exact component ={Home} />
                    <Route path='/about' exact component ={About} />
                    <Route path='/services' exact component ={Services} />
                    <Route path='/blog' exact component ={Blog} />
                    <Route path='/contact' exact component ={Contact} />
                    <Route path='*' exact component ={ErrorPage} />
                </Switch>
              </div>
            <Footer />
          </Route>
        </Router>
      </div>
    )
  }
}


export default App;