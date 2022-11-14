import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import { Context } from './Pages'



const Content  = styled.div`
    margin-top: 30px;
    margin-left: 10%;
    display: flex;
    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    flex-wrap: wrap;
}
    
`

const MyDetails = styled.div`
margin-top: 40px;
margin-left: 80px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    margin-left: 0%;
    margin-top: 0px;
}
`
const MyImage = styled.img`

width: 30%;
border-radius: 10px;
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    width: 80%;
}
`
const MyTitle = styled.h3`
    color: white;
    font-size: 40px;
`

const Anchor = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  
`

const ReleaseD = styled.p`
    color: silver;
    font-size: 22px;
`

const Popular = styled.p`
    /* background-color: #ff7070; */
    color: white;
    border: 1px solid silver;
    padding: 4px 15px;
    border-radius: 5px;
    /* margin: 0px 10px; */
`
const OverView = styled.p`
    width: 70%;
    line-height: 1.7;
    color: #adadad;
`
const ButtonContainer = styled.div`
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 40px;
}
`

const Button = styled.button`
    border: none;
    padding: 5px 40px;
    border-radius: 8px;
    background:#d10000;
    border: 1px solid silver;
    color: white;
    font-size: bold;
    /* margin: 0px 10px; */
    outline: none;
    
   
`
const ButtonT = styled.button`
    border: none;
    padding: 5px 40px;
    border-radius: 8px;
    background:none;
    border: 1px solid silver;
    color: white;
    font-size: bold;
    /* margin: 0px 10px; */
    margin-left: 20px;
`
const Details = () => {
    let { tvId } = useParams();
    const [movie , setMovie] = useState([]);
    const Rap = async ()=>{
     const api = `https://api.themoviedb.org/3/tv/${tvId}?api_key=aa102bc6f62ad721b21bf7634f3689fb&language=en-US`
    const data = await fetch(api);
    const response = await data.json();
       setMovie(response)
        }

    useEffect(()=>{
        Rap()
    },[])
    const MyContext = useContext(Context)
   
   
  return (
    <>

            <Content>
        <MyImage
            src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path || movie.backdrop_path }`} /> 
        <MyDetails >
            <MyTitle>{movie.original_title}</MyTitle> 
            <Anchor>
            <ReleaseD>{movie && movie.release_date || movie.first_air_date}</ReleaseD>
                <Popular>{Math.floor(movie.popularity)}M</Popular>
            </Anchor>
            <OverView>{movie.overview}</OverView>
            <ButtonContainer>
        <Button onClick={()=>MyContext.dispatch({type:"add to watch list" , payload:movie})}>Add To Cart </Button>
        <ButtonT >My list</ButtonT>
            </ButtonContainer>
        </MyDetails>
        
            </Content>
       
      
    </>
  )
}

export default Details
