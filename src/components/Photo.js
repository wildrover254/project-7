import React from 'react';

//Accepts the url generated in PhotoContainer to create a photo list item

const Photo = props => (
                    <li>
                        <img src={props.url} alt="" />
                    </li>
)

export default Photo;