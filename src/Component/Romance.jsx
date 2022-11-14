import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


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

const Page = styled(Link)`
    text-decoration: none;
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

`

const Romance = () => {
    const [movie , setMovie] = useState([])
    const Rap = async ()=>{
      const Api_key = `aa102bc6f62ad721b21bf7634f3689fb`
      const api =  `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&with_genres=10749`
      const data = await fetch(api);
      const response = await data.json();
      const items = response.results;
      setMovie(items)
    }
      useEffect(()=>{
     Rap()
      },[])
  return (
    <>
    <Container>
        <Content>
        <Page style={{textDecoration: 'none'}}> <PopularMovie>Romance Movie</PopularMovie></Page>
            <SeeAll>See All</SeeAll>    
        </Content>
        <PopularImage>
          {movie.map((myData)=>{
            return(
              <Page to={`${myData.id}`} key={myData.id}>
                <Image src={`https://image.tmdb.org/t/p/w500${myData.poster_path}`} />
              </Page>
            )
          })}
        </PopularImage>
    </Container>
    </>
  )
}

export default Romance