import React from 'react';

const createRow = (key, value) => {
    return (
        <tr>
            <td>{key}</td>
            <td dangerouslySetInnerHTML={{__html: value}}/>
        </tr>
    )
}

const MovieInformation = props => {
    const {
        language,
        status,
        type,
        officialSite,
        network,
        rating,
        premiered,
    } = props.info;
    return (
        <div className="movie-item__information">
            <table>
                <tbody>
                {language ? createRow('Language:', language) : null}
                {status ? createRow('Status:', status) : null}
                {type ? createRow('Type:', type) : null}
                {officialSite ? createRow('OfficialSite:', `<a href='${officialSite}'>${officialSite}</a>`) : null}
                {network && network.country ? createRow('Country:', network.country.name) : null}
                {rating && rating.average ? createRow('Rating:', rating.average) : null}
                {premiered ? createRow('Premiered:', premiered) : null}
                </tbody>
            </table>
        </div>
    )
}

export default MovieInformation;
