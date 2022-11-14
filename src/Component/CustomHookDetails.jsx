import React, { useEffect, useState } from 'react'

const CustomHookDetails = (api)=>{
    const [movie , setMovie] = useState([])
    
    const Rap = async ()=>{
      
       
        const data = await fetch(api);
        
         const items = await data.json();
         setMovie(items)
      
        
    }
    useEffect(()=>{
        Rap()
         
    },[])
    return {movie , setMovie}

}



export default CustomHookDetails

