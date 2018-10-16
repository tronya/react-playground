import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import Loading from "../Loading/Loading";

const MoviesList = props => {
    const {list} = props;
    if (!list || !list.length) return <Loading/>;
    const newList = list.filter((movie, i) => i < 50);
    return (
        <div className="movies__list">
            {newList.map(item => <MovieItem {...item} key={item.show.id}/>)}
        </div>
    );
};

export default MoviesList;
