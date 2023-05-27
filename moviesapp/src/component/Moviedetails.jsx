import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";

import Relevant from "./Relevant";
import { useNavigate } from "react-router-dom";
const Moviedetails = () => {

    let {id} = useParams();
    let navigate = useNavigate();
    let [movie , setMovie] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    
    useEffect(()=>{
        setMovie(null);
        setPending(true);

        setTimeout(()=>{
            fetch(" http://localhost:4004/movies"+ id)
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovie(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 2000)
    } , [id])

    let deletemovie = ()=>{
        fetch("   http://localhost:4004/movies"+id , {method: "DELETE"})
        .then(()=>{ navigate ("/")});
        alert("movie has been deleted");
    }

    return (<div>
        {pending===true  &&  <h1>Loading.......</h1>}
        {error && <h1> {error} </h1>}
        {movie &&   <div className="movie-details">
                        <h1>Watch Complete movie</h1>
                        <img src={movie.poster} alt="poster" />
                        <h1>Movie : {movie.moviename}</h1>
                        <h3>Actor : {movie.hero}</h3>
                        <p>Director : {movie.ditrector}</p> 
                        <p>Languages : {movie.languages.join(" , ")}</p>
                        <p>Genre : {movie.genre}</p>
                        <h3>Story Line : </h3>
                        <p>{movie.synopsis}</p>
                        <iframe width="560" height="315" src={movie.trailer} 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                        <button onClick={deletemovie}> DELETE</button>
                        <link rel="stylesheet" href="" />
                    </div> }

        {movie && <Relevant genre={movie.genre}/>}

    </div> );
} 
 
export default Moviedetails;