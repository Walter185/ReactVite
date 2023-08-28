import NavBar from "../components/Navbar"

const NotFound = () => {
    return (
        <section>
            <NavBar />
            <h1 className="text-center text-danger mt-5">404 <br />NOT FOUND</h1>
        </section>
    );
};

export default NotFound;