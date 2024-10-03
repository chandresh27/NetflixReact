import React from 'react'
import VideoTitle from './VideoTitle'
import VideoTailer from './VideoTailer'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const movie = useSelector(store => store.movie?.movies)
    if(!movie) return null;

    const mainmovie = movie[0] 

    const {overview,title,id} = mainmovie
    
  return (
    <>
    <VideoTitle title={title} overview={overview} />
    <VideoTailer movieId= {id}/>
    </>
  )
}

export default Maincontainer