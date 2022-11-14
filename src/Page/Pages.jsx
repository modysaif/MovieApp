import React, { createContext, useEffect, useReducer, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Movie from '../Component/Movie'
import Navbar from '../Component/Navbar'
import Details from './Details'
import Action from '../Component/Action'
import Comedy from '../Component/Comedy'
import Romance from '../Component/Romance'
import ActionDetails from './ActionDetails'
import HorrorDetails from './HorrorDetails'
import RomanceDetails from './RomanceDetails'
import Chekout from '../Component/Chekout'
import Nav from '../Component/Nav'

export const Context = createContext();

export const initialState = {
  watch:[]
}

const reducer = (state , action)=>{
switch(action.type){
 case 'add to watch list' :
     return {...state , watch:[...state.watch, action.payload]}

    case 'remove from watch list' :
      return{...state , watch:state.watch.filter((c)=> c.id !== action.payload.id)}
 
}
}
const Pages = () => {
  const [state , dispatch] = useReducer(reducer , initialState)
  const [movie , setMovie] = useState([]);
  let { actionId } = useParams();
  const Rap = async()=>{
   const api = `https://api.themoviedb.org/3/movie/${actionId}?api_key=aa102bc6f62ad721b21bf7634f3689fb&language=en-US`
   const data = await fetch(api);
   const items = await data.json();
   setMovie(items)
  
  }

  useEffect(()=>{
      Rap()
  },[])
  return (
    <Context.Provider value={{movie , state , dispatch}}>
        <Nav />
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/tv' element={<Details />} >
         <Route path=':tvId' element={<Details />} />   
        </Route>
        <Route path='/popular' element={<Movie />} /> 
        <Route path='/action/' element={<Action />}/>
        <Route path='/action/:actionId' element={<ActionDetails/>} />
        <Route path='/horror' element={<Comedy />} />
         <Route path='/horror/:horrorId' element={<HorrorDetails />} /> 
        <Route path='/romance' element={<Romance/>} />
        <Route path='/romance/:romanceId' element={<RomanceDetails />} />
        <Route path='/chekout' element={<Chekout />} />
      </Routes>
    </Context.Provider>
  )
}

export default Pages
