import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Search />
                    <Nav />
                        <Route exact path="/" render={ () => <PhotoContainer search='cats' />} />
                        <Route path ="/cats" render={ () => <PhotoContainer search='cats' />} />
                        <Route path ="/dogs" render={ () => <PhotoContainer search='dogs' />} />
                        <Route path ="/computers" render={ () => <PhotoContainer search='computers' />} />
                </div>
            </Router>
        );
    }
}

export default App;