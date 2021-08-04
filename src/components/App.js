import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Search />
                    <Nav />
                    <Route exact path="/" render={ () => <PhotoContainer />} />
                    <Route path="/not-found" component={NotFound} />
                </div>
            </Router>
        );
    }
}

export default App;