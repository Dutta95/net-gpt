import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);
    
    return (
        <div>
            <h1 className='text-white'>{title}</h1>
            <div className='flex'>
                {
                    movies?.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    })
                }
            </div>
            {/* <MovieCard posterPath={posterPath}/> */}
        </div>
    )
}

export default MovieList
