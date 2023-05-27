// import { useEffect, useState } from "react";
// import Movieslist from "./Movieslist";

// const Favourite = () => {

//      let [favid, setfavid]=useState([]);
//      
//  useEffect (()=>{  let fav=JSON.parse(localStorage.getItem("fav"))
//  setfavid(fav.map((m)=>{return m,id}));
// },[altered])


//  let add = (movie)=>{
//      let fav= JSON.parse(localStorage.getItem("fav"));
//      fav.push(movie)
//      localStorage.setItem("fav",JSON.stringify (fav));
//     
//  }

//  let removemovie = (id)=>{
//     let fav= JSON.parse(localStorage.getItem("fav"));
//  fav=fav.filter((m)=>{return m.id!=id})
//     localStorage.setItem("fav",JSON.stringify (fav));
//     setaltered(altered+1);
// }
 
// return(
//     <div>
//         {fav && <Movieslist movies={fav} title="Favorites"/>  }

//     </div>
// )
// }
 
// export default Favourite;
import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Favorites = () => {

    let[fav , setFav] = useState(null);

    useEffect( ()=>{
     setFav( JSON.parse(localStorage.getItem("fav")) );
    } , [])

    return(
        <div>
            {fav && <Movieslist movies={fav} title="Favorites"/>  }
        </div>
    )
}
 
export default Favorites;