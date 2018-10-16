import React from 'react';

const GenresCreator = props => {
    if (!props.genres || !props.genres.length) return null
    return (
        <div className="genres">
            {props.genres.map(genre => <p key={genre} className="genres__item">{genre}</p>)}
        </div>
    )
};

export default GenresCreator;
