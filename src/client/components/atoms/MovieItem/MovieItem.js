import React, {Component} from 'react';
import './MovieItem.css'

class MovieItem extends Component {
    render() {
        const {score, show} = this.props;
        const {
            externals,
            genres,
            id,
            image,
            language,
            name,
            network,
            oficialSite,
            premiered,
            rating,
            shedule,
            status,
            summary,
            type,
            updated,
            url,
            webChannel,
            weight
        } = show;
        return (
            <div key={id} className="movie_item">
                <h4>{name}</h4>
                <h6 dangerouslySetInnerHTML={{__html: summary}}/>
                {image && (
                    <img src={image.original || image.medium} alt={name}/>
                )}
            </div>
        );
    }
}

export default MovieItem;
