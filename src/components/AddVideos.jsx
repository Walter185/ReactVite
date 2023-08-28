import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { videoCollectionRef } from "../firebase/collections";

export default function AddVideos() {
    const [titulo, setTitulo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (titulo === '') {
            return
        }
        addDoc(videoCollectionRef, {titulo})
        .then(response => {
            console.log("video agregado exitosamente")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

  return (
    <div>
        <h4>AddVideos</h4>
        <form onSubmit={handleSubmit}>
            <label 
            htmlFor="titulo"
            >Titulo del video
            </label>
            <input 
            id="titulo"
            type="text" 
            value={titulo} 
            onChange={ e => setTitulo(e.target.value)} 
            />
            <button type="submit">Agregar video</button>
        </form>
    </div>
  )
}
