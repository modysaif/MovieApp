import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {Link} from 'react-router-dom'
import { useContext } from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Page/Pages';

const Rightnav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Catogries = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
  

`

const MyLink = styled(Link)`
    color: white;
    &:hover{
        color: #af0000;
    }
`
const Leftnav = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 25px;

    
`
const Logo = styled.img`
    /* color: #d10000;
    font-size: 25px; */
    width: 15%;
    
     
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

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
}
`
const Image = styled.img`
  
`
const Navs = styled.nav`
    background-color: #111;
    width: 100%;
    min-height: 70px;
    position: sticky;
    top: 0;
    z-index: 1000;
`

const Container  = styled.div`
padding-left: 5%;
padding-right: 5%;
padding-top: 15px;


`
const Alert = styled.div`
color: #af0000;
width: 100%;

`
const AlertIn = styled.a`
color: #af0000;
margin: 0px 5px;
 padding: 2px; 
`
const Nav = () => {
  const MyContext  = useContext(Context);
  const item = MyContext.state.watch  ;
  const basket= item.length;
  
  return (
    <>
      <Navs>
        <Container>
          <Flex>
             <Rightnav>
                 <Logo src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' />
                <InputContainer>
                    <Input type="text" placeholder='Search...' />
                   
                </InputContainer>
             </Rightnav>
             <Catogries>
                <MyLink style={{textDecoration:"none"}} to='/'>Home</MyLink>
                <MyLink style={{textDecoration:"none"}} to="/action">Action</MyLink>
                <MyLink style={{textDecoration:"none"}} to="/horror">Horror</MyLink>
                <MyLink style={{textDecoration:"none"}} to='/romance' >Romance</MyLink>
                </Catogries>
              <Leftnav  >
            <Link to='/chekout'>
             <Alert> <FontAwesomeIcon icon={faBell} style={{color:'white' , fontSize:"20px"}} /><AlertIn>{basket}</AlertIn> </Alert>
              </Link>
            <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' style={{ width:"10%" , borderRadius:"50px" , border:"2px solid silver" , cursor:"pointer"}} />
          
            </Leftnav>
          </Flex>
        </Container>
       
    </Navs>
    </>
  )
}

export default Nav