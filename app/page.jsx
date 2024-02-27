import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  async function getMovies(){
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=04624bb046927b9b57858778b8fbfc20`)
       response = await response.json()
       return response.results;
  }

    let movies = await getMovies() 



  return <>
  <section>
    <div className="container py-5">
      <h1 className="text-center titles ">Top 20 </h1>
      <h2 className="text-center pb-5 titles">Movies Everyday</h2>
      <div className="row gy-4">
        
          {movies.map((movie, index) =>  <div key={index} className="col-md-3">
             <div class="cardBox">
  <div class="card">
     <div class="h4">
     <Image height={500} width={300}  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-100 h-auto" alt={movie.title} />
     </div> 
    <div class="content">
      <div class="h3">{movie.title}</div>
      <p>{movie.overview.slice(' ').split(" ").slice(0,75).join(" ")}</p>
    </div>
  </div>
</div>
    </div>)}

      </div>
    </div>
  </section>
  
  </>
}
