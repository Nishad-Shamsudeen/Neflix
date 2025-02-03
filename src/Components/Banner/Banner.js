import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY, imageURL } from '../../Constatnce/Constance'
function Banner() {
    
    const [movie, setMovie] = useState()
  
    useEffect(() => {
       
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {

            setMovie(response.data.results[0]);
        
        const result=response.data.results 
        setInterval(() =>{callme(result)}, 15000);
            
                  
        }).catch((error) => {
            alert("NSD its ERROR")
            console.log("There is some error", error)
        })
    function callme(movieData)
    {
       let random= Math.floor(Math.random()*movieData.length)
    
        setMovie(movieData[random])
    }
        
    },[])
    return (
        <div className='container-fluid'>
            <div className='row'>
       <div className=" col-12">
         <div className="banner " style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }}>  
            <div className='content'>
                <h2 className='movie-name'>{movie ? movie.name : 'No file '}</h2>

                <div className="banner-button">
                    
                    <button className='button'onClick={() => alert("Trailer will be added soon...")} >Play</button>
                    <button className='button'onClick={() => alert("I am working on adding the list")} >List</button>
                </div>
                <h1 className='description'>
                    {movie ? movie.overview : ''}</h1>


            </div>
            <div className="fade-bottom"></div>
        </div>
        </div>
        </div>
        </div>
        
        
        
    )
}

export default Banner
