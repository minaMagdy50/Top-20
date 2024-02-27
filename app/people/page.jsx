import Image from 'next/image'
import React from 'react'

export default async function People() {

  async function getpeople(){
    let response = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=04624bb046927b9b57858778b8fbfc20`)
    response = await response.json()
    return response.results
  }

  let peoples = await getpeople()
  console.log(peoples);



  return <>
  
  <section>
    <div className='container py-5'>
    <h1 className="text-center titles ">Top 20 </h1>
      <h2 className="text-center pb-5 titles">Peoples Everyday</h2>
      <div className="row gy-4">
        {peoples.map((people , index) => <div key={index} className='col-md-3'>
         <div class="cardBox">
  <div class="card">
     <div class="h4">
      <Image width={200} height={400} src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} className='w-100 h-auto' alt={people.name} />
     </div>
    <div class="content">
      <div class="h3">{people.name}</div>
    </div>
  </div>
</div>

        </div>)}
      </div>
    </div>
  </section>


  </>
}
