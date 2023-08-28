import { updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase.config";
import { doc } from "firebase/firestore";

export default function EditVideos() {
    const [titulo, setTitulo] = useState('')
    const [id, setId] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (titulo === '' || id === '') {
            return
        }
        const docRef = doc(db, 'videos', id)
        updateDoc(docRef, {titulo}).then(response => {
            console.log("info actualizada")
        }).catch(error => console.log(error.message))
    }

  return (
    <div>
        <h4>Editar Video</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID del video</label>
            <input 
                id="id"
                type="text" 
                value={id} 
                onChange={e => setId(e.target.value)} 
            />
            <input 
                id="titulo"
                type="text" 
                value={titulo} 
                onChange={e => setTitulo(e.target.value)} 
            />
            <button type="submit">Actualizar video</button>
        </form>
    </div>
  )
}
