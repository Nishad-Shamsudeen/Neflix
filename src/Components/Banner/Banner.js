import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY,imageURL,API_CALL } from '../../Constatnce/Constance'
function Banner() {
    const [movie, setMovie] = useState()
const sampleUrl='/public/Shawshank redemption.jpg'
    useEffect(() => {
        
            axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{

           
            setMovie(response.data.results[0]);
           // console.log(response.data.results)

        })
            .catch((error) => {
                alert("NSD its ERROR")
                console.log("There is some error", error)
            })
    }, [])
    return (
        <div className='banner'style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path :""})`}}>
            
            <div className='content'>
                    <h2 className='movie-name'>{movie ? movie.name:'No file '}</h2>
                    
                <div className="banner-button">
                    <button onClick={()=>alert("Trailer will be added soon...")}className='button'>Play</button>
                    <button onClick={()=>alert("We are working on adding the list")}className='button'>List</button>
                </div>
                <h1 className='description'> 
                    {movie ? movie.overview :''}</h1>


            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
