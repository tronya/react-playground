import React, {Component} from 'react';
import GenresCreator from "../GenresCreator/GenresCreator";
import MovieInformation from "../MovieInformation/MovieInformation";
import {Link} from "react-router-dom";

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
            officialSite,
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
            <div key={id} className="movie-item">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        {image && (
                            <img className="movie-item__image" src={image.original || image.medium} alt={name}/>
                        )}
                    </div>
                    <div className="col-xs-12 col-sm-8 start-md">
                        <div className="movie-item__content">
                            <h2>{name}</h2>
                            <p dangerouslySetInnerHTML={{__html: summary}}/>
                            <GenresCreator genres={genres}/>
                            <MovieInformation info={{
                                language,
                                status,
                                type,
                                officialSite,
                                network,
                                rating,
                                premiered,
                                externals
                            }}/>
                        </div>
                        <div className="movie-item__footer">
                            <Link to={`detail/${id}`}>Detail information</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;
