import { createContext } from 'react'
import { useContext } from 'react'
import { useEffect, useReducer, useState } from 'react'
// import { useParams } from 'react-router-dom'
import   './App.css'
import Action from './Component/Action'
import Header from './Component/Header'
import Movie from './Component/Movie'
import Nav from './Component/Nav'
import Navbar, { Context } from './Component/Navbar'
import Pages from './Page/Pages'


// const initialState = {
//     watch:[]
// }

// const reducer = (state , action)=>{
//   switch(action.type){
//    case 'add to watch list' :
//        return {...state , watch:[...state.watch, action.payload]}

      
   
//   }
// }
// export const Context = createContext()
const App = () => {

  return (
    <>
      <Pages />

    </>
  )
}

export default App
