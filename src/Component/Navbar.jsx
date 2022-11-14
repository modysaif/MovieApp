import React, { useState , useEffect, useReducer, createContext } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import Usehook from '../Page/CustomHoo';


const Container  = styled.div`
padding-left: 5%;
padding-right: 5%;
padding-top: 15px;

`
const Div = styled.div`
  width: 100%;
  height: 100vh;
`

const MovieDetails = styled.div`
    padding-top:6% ;
 
`

const Title = styled.h3`
    color: white;
    font-size: 60px;
    
`
const Anchor = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
`

const OverView = styled.p`
    width: 50%;
    line-height: 1.7;
    color: #adadad;
`
const ButtonContainer = styled.div`

`

const Button = styled.button`
    border: none;
    padding: 5px 40px;
    border-radius: 8px;
    background:none;
    border: 1px solid silver;
    color: white;
    font-size: bold;
    margin: 0px 10px;
`
const ReleaseD = styled.p`
    color: silver;
    font-size: 22px;
`

const Popular = styled.p`
  
    color: white;
    border: 1px solid silver;
    padding: 4px 15px;
    border-radius: 5px;
    
`




const Navbar = () => {

    const imgs = `https://image.tmdb.org/t/p/original`
    const {movie} = Usehook(`https://api.themoviedb.org/3/trending/all/day?api_key=aa102bc6f62ad721b21bf7634f3689fb`)
    
  return (
    <>
    <Div 
    style={
     {
         backgroundSize:"cover",
         backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7371323529411764) 34%, rgba(0,0,11,0.44021358543417366) 49%, rgba(255,255,255,0) 100%),url(${imgs}${movie.backdrop_path}) `
     }
    }>
  
     <Container>
        <MovieDetails>
        <Title>{movie && (movie.original_name )|| movie.original_title}</Title>
       <Anchor>
       <ReleaseD>{movie && movie.release_date || movie.first_air_date}</ReleaseD>
        <Popular>{Math.floor(movie.vote_average)}M</Popular>
       </Anchor>
       <OverView>{movie.overview}</OverView>
       <ButtonContainer>
        <Button >Play</Button>
        <Button>My list</Button>
       </ButtonContainer>
        </MovieDetails>
     </Container>
    </Div>
    <Movie />
    {/* <Chekout /> */}
    
    </>
  )
}

export default Navbar