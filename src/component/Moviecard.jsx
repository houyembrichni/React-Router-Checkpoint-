import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Moviecard({movies}) {
 const navigate=useNavigate()
  console.log("🚀 ~ file: Moviecard.jsx:4 ~ Moviecard ~ movies:", movies)
  const {id} = useParams()
   const datamovie = movies.find((elt) => elt.id === id );
  //  console.log("🚀 ~7 ~ Moviecard ~ datamovie:", datamovie)
   let src = `https://www.youtube.com/embed/${datamovie.trailer}?si=Y93jNw1Jsrgb18dW`;
  return (
    <div style={{ display: "flex", alignItems: "center",flexDirection:"column",marginTop:'50px' }}>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <p style={{width:'600px',fontSize:'20px'}}>{datamovie.description}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Moviecard