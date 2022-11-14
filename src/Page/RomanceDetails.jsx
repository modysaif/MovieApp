import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from './Pages'
import CustomHookDetails from '../Component/CustomHookDetails'

const Nav = styled.nav`
    background-color: #111;
    width: 100%;
    min-height: 70px;
`
const Container  = styled.div`
padding-left: 5%;
padding-right: 5%;
padding-top: 15px;

`

const Leftnav = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 25px;

`


const Rightnav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const Logo = styled.img`
    /* color: #d10000;
    font-size: 25px; */
    width: 15%;
     
`
const Image = styled.img`
  
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const InputContainer = styled.div`
    margin-left: 25%;   
  
`
const Input = styled.input`
  width: 135%;
  padding: 5px 10px;
  border: none;
  border: 1px solid silver;
  border-radius: 30px;
  color: white;
  background-color: #111;
  font-size: 15px;
  outline: none;
`

const Content  = styled.div`
    margin-top: 30px;
    margin-left: 10%;
    display: flex;
    
`

const MyDetails = styled.div`
margin-top: 40px;
`
const MyImage = styled.img`

width: 30%;
border-radius: 10px;

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

const RomanceDetails = () => {
    const MyContext  = useContext(Context)
    
    let { romanceId } = useParams();
     const {movie} = CustomHookDetails(`https://api.themoviedb.org/3/movie/${romanceId}?api_key=aa102bc6f62ad721b21bf7634f3689fb&language=en-US`)
  return (
    <>
  
            <Content>
        <MyImage
            src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path || movie.backdrop_path }`} /> 
        <MyDetails style={{marginLeft:"80px"}}>
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

export default RomanceDetails
