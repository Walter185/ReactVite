import { useEffect, useState } from "react"
import {deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { videoCollectionRef } from "../firebase/collections"
import { db } from "../firebase/firebase.config"
export default function RealtimeVideos() {
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(videoCollectionRef, snapshot => {
      setVideos(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
    
    return () => {
      unsubscribe()
    }
  }, [])
  
  function deleteVideo(id) {
    const docRef = doc(db, 'videos', id)
    deleteDoc(docRef).then(() => console.log("documento borrado"))
    .catch(error => console.log(error.message))
}
  return (
    <div>
        <h4>RealtimeVideos</h4>
        <ul style={{margin:20}}>
          {videos.map(video => (
            <li key={video.id}>
              {video.id} : {video.data.titulo}
              <button onClick={() => deleteVideo(video.id)}>Borrar</button>

            </li>
          ))}
        </ul>
    </div>
  )
}
