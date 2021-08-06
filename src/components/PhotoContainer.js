import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    const results = props.data;
    let photos = results.map (photos => 
        <Photo url={`https://live.staticflickr.com/${results.server}/${results.id}_${results.secret}.jpg`}/>
    );
    console.log(photos);

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