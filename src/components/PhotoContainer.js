import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component{

/*
    Accepts data from the flickr api as props and creates an array of photo items then displays them
    Displays the NotFound component instead if no images are returned
*/
        
    render() {
        const results = this.props.data;

        if (results.length > 0) {
            let photos = results.map (photos => 
                <Photo url={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} />
            );
            return (
                <div>
                    <div className='photo-container'>
                        <h2>Results</h2>
                        <ul>
                            {photos}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <NotFound />
            )
        }
    }
}

export default PhotoContainer;