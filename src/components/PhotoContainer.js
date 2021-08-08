import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    const results = props.data;
    let photos = results.map (photos => 
        <Photo url={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`}/>
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

export default PhotoContainer;