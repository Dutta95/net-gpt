import React from 'react'
import { poster_path } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (
        <div className='m-1'>
            <img
                alt='movie_card' 
                className=''
                src={poster_path+posterPath}
            />
        </div>
    )
}

export default MovieCard
