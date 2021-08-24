import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import axios from 'axios';
import apiKey from '../config';

//Components to be rendered with App.js

import PhotoContainer from './PhotoContainer';
import Search from './Search';
import Nav from './Nav';

class App extends Component {

//State stores the retreived photos array and the current search term

    state = {
        photos: []
    }

//Search function uses imported api key and a search tag to store an array of photos in state

    search = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo
                });
            })
            .catch(error => {
                console.log('error', error);
            });
    }

/*
    Render method renders the Search and Nav components and switchs between the three default searches
    The root path redirects to the Fish path
*/

    render() {
        return (
            <div className='container'>
                <Router>
                    <Search onSearch={this.search} />
                    <Nav />
                    <Switch>
                        <Route exact path="/" render={ () => <Redirect to="/fish" />} />
                        <Route path="/fish" render={ () => <PhotoContainer search={this.search('fish')} data={this.state.photos} />} />
                        <Route path="/goats" render={ () => <PhotoContainer search={this.search('goats')} data={this.state.photos} />} />
                        <Route path="/ducks" render={ () => <PhotoContainer search={this.search('ducks')} data={this.state.photos} />} />
                        <Route exact path="/search/:tag" render={ ()=> <PhotoContainer onSearch={this.search}/> } />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);

