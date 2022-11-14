import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { Context, initialState } from '../Page/Pages'





const Container  = styled.div`
padding-left: 5%;
padding-right: 5%;
padding-top: 15px;

`
const PopularMovie = styled.p`
    font-size: 33px;
    font-family: 'EB Garamond', serif;
   
    &:after {
    content: " ";
    position: absolute;
    background-color: #6d0000;
    width: 8%;
    top: 10%;
    left: 5%;
    min-height:1%;
  }
`
const Content = styled.div`
    padding-top: 3%;
    display: grid;
    grid-template-columns: repeat(3,400px);
    align-items: center;
    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: repeat(1,400px);
}
`

const Gride = styled.div`

`

const Col = styled.div`


`

const MyImage = styled.img`

width: 70%;
border-radius: 10px;

`
const ButtonContainer = styled.div`
margin-top: 30px;
`

const Button = styled.button`
    border: none;
    padding: 5px 40px;
    border-radius: 8px;
    background:#d10000;
    border: 1px solid silver;
    color: white;
    font-size: bold;
    
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
  
    margin-left: 20px;
`
const Chekout = () => {
 
const Mycontext = useContext(Context) 
const item = Mycontext.state.watch  
 const basket= item.length
 
  return (
    <Container>
     <PopularMovie>You Watched {basket} Items</PopularMovie>
      <Content>
      {item.map((data)=>{
        return <Gride key={data.id} >
            <Col  >
            <PopularMovie >{data.title}</PopularMovie>
             <MyImage 
            src={`https://image.tmdb.org/t/p/original${data && data.poster_path || data.backdrop_path }`} /> 
           
            </Col>
        <ButtonContainer>
        <Button onClick={()=>Mycontext.dispatch({type:"remove from watch list" , payload:data})}>Delete</Button>
        <ButtonT>My list</ButtonT>
       </ButtonContainer>
            </Gride>
            
      })}
     
      </Content>
    </Container>
  )
}

export default Chekout