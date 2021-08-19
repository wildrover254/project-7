import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Search />
                    <Nav />
                    <Switch>
                        <Route exact path="/" render={ () => <Redirect to="/search/cats" />} />
                        <Route exact path ="/search/:tag" component={PhotoContainer} />
                    </Switch>  
                </Router>
            </div>
        );
    }
}

export default App;

