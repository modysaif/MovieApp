import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import CustomHookDetails from './CustomHookDetails';

const Container = styled.div`
 padding-left: 5%;
padding-right: 5%;
padding-top: 15px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
const PopularMovie = styled.p`
    font-size: 33px;
    font-family: 'EB Garamond', serif;
   
    &:after {
    content: " ";
    position: absolute;
    background-color: #6d0000;
    width: 8%;
    top: 80%;
    left: 0%;
    min-height:6%;
  }
`







const SeeAll = styled.p`
    
`
const PopularImage = styled.div`
position: relative;

`
const Image = styled.img`
width:20%;
padding: 10px;
&:hover{
    transform: scale(1.08);
    transition: transform 450ms;
}
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    width:25%;
}

`

const Page = styled(Link)`
    text-decoration: none;
`




const Movie = () => {
    const imgs = `https://image.tmdb.org/t/p/original`
    const [movie , setMovie] = useState([]);
    
    const Rap = async ()=>{
        const Api_key = `aa102bc6f62ad721b21bf7634f3689fb`
        const api = `https://api.themoviedb.org/3/discover/tv?api_key=aa102bc6f62ad721b21bf7634f3689fb&with_networks=213`
        const data = await fetch(api);
        const response = await data.json()

         setMovie(response.results)
    }

    useEffect(()=>{
        Rap()
    },[])
   
  return (
    <>
      <Container>
        <Content>
       <Page to='/popular' style={{textDecoration: 'none'}}> <PopularMovie>Popular Movie</PopularMovie></Page>
        <SeeAll>See All</SeeAll>
        </Content>
        <PopularImage>
          {movie.map((myItems)=>{
            return (
               <Page key={myItems.id} to={`/tv/${myItems.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original${myItems.poster_path}`} alt={myItems.name} />
               </Page>    
            )
          })}
        </PopularImage>
        
      </Container>
    </>
  )
}

export default Movie
