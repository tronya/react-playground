import React from 'react';
import Loading from "../../atoms/Loading/Loading";

const CastItem = castItem => {
    const {person: {id, name: personName, birthday, gender, country}, character: {name, image}} = castItem;
    return (
        <div className="cast__item col-xs-12 col-md-3" key={id}>
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    {image && (
                        <img className="movie-item__image" src={image.original || image.medium} alt={name}/>
                    )}
                </div>
                <div className="col-xs-12 col-md-8">
                    <h4>{personName} as <b>{name}</b></h4>
                    {birthday && <p>BD: {birthday}</p>}
                    {gender && <p>{gender}</p>}
                    {country && <p>{country.name}</p>}
                </div>
            </div>
        </div>
    )
}

const Cast = ({cast = []}) => {
    if (!cast.length) return <Loading/>;
    return (
        <div className="cast">
            <div className="row">
                {cast.map(CastItem)}
            </div>
        </div>
    );
};
export default Cast;
