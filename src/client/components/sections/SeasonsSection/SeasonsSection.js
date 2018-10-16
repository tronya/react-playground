import React from 'react';
import Loading from "../../atoms/Loading/Loading";

const SeasonsItem = season => {
    const {id, url, number, name, episodOrder, premierDate, endDate, webChannel, image, summary} = season;
    return (
        <div className="seasons__item" key={id}>
            <div className="row">
                <div className="col-xs-12 col-md-3">
                    <div className="seasons__image">
                        {image && (
                            <img className="movie-item__image" src={image.original || image.medium} alt={name}/>
                        )}
                    </div>
                </div>
                <div className="col-xs-1 col-md-9">
                    <p>Season <b>{number}</b></p>
                    {premierDate ? <p>Premier date: <span>{premierDate}</span></p> : null}
                    {endDate ? <p>Premier date: <span>{endDate}</span></p> : null}
                    <p dangerouslySetInnerHTML={{__html: summary}}/>
                </div>
            </div>
        </div>
    )
}

const SeasonsSection = ({seasons = []}) => {
    if (!seasons.length) return <Loading/>
    return (
        <div className="seasons">
            <div className="container">
                <h2>Seasons</h2>
                <div className="seasons__wrapper">
                    {seasons.length && seasons.map(SeasonsItem)}
                </div>
            </div>
        </div>
    );
};

export default SeasonsSection;
