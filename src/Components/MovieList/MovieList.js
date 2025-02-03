import React, { useEffect, useState } from 'react'
import './MovieList.css'
import axios from '../../Axios'
import { API_KEY, imageURL } from '../../Constatnce/Constance'
import YouTube from 'react-youtube'


function MovieList(props) {
  const [movie, setMovie] = useState([])
  const [video,setVideo]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results)
    })
  }, [])
   const rel='?rel=0'
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel:0,
    },
  };
  
  const PlayMovie =( (id) => {
    
    //console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {

      //console.log(response.data.results)
      if (response.data.results.length!==0)
      {
        setVideo(response.data.results[0])
        console.log(response.data)
      }else{
        alert("Video play back is not avialable")
      }
      
    })
  })


return (
 
  <div className='row'>
    <div className="posters ">
      <div className={props.isSmall ? "title":""}>
        <h1 >{props.title}</h1>
      </div>
      <div className="poster-image-main ">
        
        {movie.map((obj) => {
          return (<img onClick={() => PlayMovie(obj.id)} className={props.isSmall ? "small-poster-image" : "poster-image"} src={imageURL + obj.backdrop_path} alt="Poster" />)
        }
        )}
      </div>


    </div>
    
   {video && <YouTube videoId={ video.key}opts={opts} /> }
   </div>
)
}


export default MovieList
