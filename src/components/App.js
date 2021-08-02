import React, { Component } from 'react';
import {
    BroswerRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    render() {
        return (
            <div>
                <Search />
                <Nav />
                <PhotoContainer />
            </div>
        );
    }
}

export default App;