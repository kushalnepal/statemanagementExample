import React, { useEffect, useState } from 'react'


function Stories() {
const [isloading,setloading] = useState(true);
const [stories,setstories] =useState([]) // Atually it is array so we use this [] symbol
  let API = "https://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData=async (url)=>{
    try{
      const res = await fetch(url);
      const data = await res.json()
      console.log('Fetch url in the form of url',data);
       setstories(data.hits)
       setloading (false);
    }
    catch(error){
         console.log("Error occour",error);
    }

  }
  useEffect(() => {
    fetchApiData(API);
  }, []);


  
  if(isloading){
    return(
      <h1>Loading ...</h1>
    )
  }


  return (
    <>
    <h1>{stories.map((story)=>(
      <li key={story.objectID}>{story.title}</li>
    ))}</h1>
    </>
  )
}

export default Stories;