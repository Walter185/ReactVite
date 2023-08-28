import AddVideos from "../components/AddVideos";
import EditVideos from "../components/EditVideos";
import { Foot } from "../components/Footer";
import NavBar from "../components/Navbar";
import RealtimeVideos from "../components/RealtimeVideos";


const Home = () => {
    return (
        <div className='bg-brand bg-brand-container'>
        <NavBar />
        <RealtimeVideos />
        <AddVideos />
        <EditVideos />       
        <Foot />
        </div>
    )
}

export default Home;