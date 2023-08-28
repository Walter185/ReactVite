import { collection } from "firebase/firestore";
import { db } from "./firebase.config"

export const videoCollectionRef =  collection(db, "videos")