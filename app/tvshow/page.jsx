import Image from 'next/image';
import React from 'react'

export default async function TvShow() {
  async function getTvShows(){
    let response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=04624bb046927b9b57858778b8fbfc20`)
       response = await response.json()
       return response.results;
  }

    let tvshows = await getTvShows() 

  return <>
  
  <section>
    <div className="container py-5">
    <h1 className="text-center titles  ">Top 20 </h1>
      <h2 className="text-center pb-5 titles ">TV Shows Everyday</h2>
      <div className="row gy-4">
        
          {tvshows.map((tvshow , index) =>  <div key={index} className="col-md-3"> <div class="cardBox">
  <div class="card">
     <div class="h4">
     <Image height={500} width={300}  src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`} className="w-100 h-auto" alt={tvshow.name} />
     </div> 
    <div class="content">
      <div class="h3">{tvshow.name}</div>
      <p>{tvshow.overview.slice(' ').split(" ").slice(0,75).join(" ")}</p>
    </div>
  </div>
</div>
    </div>)}

      </div>
    </div>
  </section>
  </>
}
