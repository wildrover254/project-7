import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import apiKey from './config';
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

    componentDidMount () {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo
                });
            })
            .catch(error => {
                console.log('error', error);
            });
    }

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
                    <Route path="/not-found" component={NotFound} />
                </div>
            </Router>
        );
    }
}

export default App;