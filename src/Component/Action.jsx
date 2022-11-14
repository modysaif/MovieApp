
import { useState , useEffect } from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom'


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

// const Page = styled(Link)`
//     text-decoration: none;
// `

const PopularImage = styled.div`
position: relative;

`

const Page = styled(Link)`
    text-decoration: none;
`


const Image = styled.img`
width:20%;
padding: 10px;
&:hover{
    transform: scale(1.08);
    transition: transform 450ms;
}

`

    const Action = () => {
    const [movie , setMovie] = useState([])
    let { actionId } = useParams();
    const img = 'https://image.tmdb.org/t/p/w500'
    const Rap = async ()=>{
    const Api_key = `aa102bc6f62ad721b21bf7634f3689fb`
    const api =  `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&with_genres=28`
    const data = await fetch(api);
    const response = await data.json();
    const items = response.results;
    // console.log(items)
    setMovie(items)
    
  }
    useEffect(()=>{
   Rap()
    },[])
  return (
    <>
    <Container>
        <Content>
        <Page style={{textDecoration: 'none'}}> <PopularMovie>Action Movie</PopularMovie></Page>
            <SeeAll>See All</SeeAll>    
        </Content>
        <PopularImage>
       {movie.map((data)=>{
        return(
          <Page to={`/action/${data.id}`} key={data.id}>
          <Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}  alt={data.name}/>
        </Page>
        )
       })}
        </PopularImage>
    </Container>
    </>
  )
}

export default Action
