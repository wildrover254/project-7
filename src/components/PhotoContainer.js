import React, { Component } from 'react';
import axios from 'axios';
import Photo from './Photo';
import apiKey from './config';

class PhotoContainer extends Component{

    state = {
        photos: []
    }

    componentDidMount () {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.search}&per_page=24&format=json&nojsoncallback=1`)
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
        const results = this.state.photos;
        let photos = results.map (photos => 
            <Photo url={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} />
        );
        return (
            <div className='photo-container'>
                <h2>Results</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;