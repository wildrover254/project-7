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
import noRoute from './noRoute';

class App extends Component {

//State stores the retreived photos array for searches and the results for the NavLink Searches

    state = {
        photos: [],
        fish: [],
        goats:[],
        ducks: []
    }

//Stores the results for the NavLink Searches in state when the App component loads

    componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=fish&per_page=24&format=json&nojsoncallback=1`)
                .then(response => {
                    this.setState({
                        fish: response.data.photos.photo,
                    });
                })
                .catch(error => {
                    console.log('error', error);
                });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=goats&per_page=24&format=json&nojsoncallback=1`)
                .then(response => {
                    this.setState({
                        goats: response.data.photos.photo
                    });
                })
                .catch(error => {
                    console.log('error', error);
                });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=ducks&per_page=24&format=json&nojsoncallback=1`)
                .then(response => {
                    this.setState({
                        ducks: response.data.photos.photo
                    });
                })
                .catch(error => {
                    console.log('error', error);
                });
        
    }

/*
    Enables navigation via forward and back browser buttons by comparing current and previous props
    and running a new search if they don't match.
*/
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.search(this.props.location.pathname.replace('/search/',''))
        }
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
                        <Route path="/fish" render={ () => <PhotoContainer data={this.state.fish} />} />
                        <Route path="/goats" render={ () => <PhotoContainer data={this.state.goats} />} />
                        <Route path="/ducks" render={ () => <PhotoContainer data={this.state.ducks} />} />
                        <Route exact path="/search/:tag" render={ ()=> <PhotoContainer data={this.state.photos}/> } />
                        <Route component={noRoute} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);

