import { useEffect, useState } from "react";


const Usehook = (api)=>{
    const [movie , setMovie] = useState([])
    
    const Rap = async ()=>{
        // const api =`https://api.themoviedb.org/3/trending/all/day?api_key=aa102bc6f62ad721b21bf7634f3689fb`
       
        const data = await fetch(api);
        const response = await data.json();
        const items = response.results;
        setMovie(items[Math.floor(Math.random() * items.length)])
      
        
    }
    useEffect(()=>{
        Rap()
         
    },[])
    return {movie , setMovie}

}


export default Usehook