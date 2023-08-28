import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/img/logo.png";
import { Logo } from "./Estilos";
import products from "../assets/data/products.json";
import useAuth from "../hooks/useAuth";
import { getStoredCart } from "../utilities/localDB";

const Nav=styled.nav`
    /* background: #cc3333; */
    /* box-shadow: 0 5px 15px #c4c4c44d; */
    justify-content: space-between;
`;

const Contenedor1 = styled.div`
    margin-left: 20px;
    display: flex;
`;

const Contenedor2 = styled.div`
    margin-right: 20px;
`;

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.mainero};
    text-align: center;
`;
const NavBar = () => {
    const { user, logOut } = useAuth();
    let savedCart = getStoredCart()
    let cart = [];
    for (let key in savedCart) {
        cart.push({ ...products.find(pd => pd.id === key), quantity: savedCart[key] })
    }

    return (
        <Header>
        <Nav className="navbar navbar-expand-lg sticky-top">
            <Contenedor1>
                <Link to="/" className="navbar-brand" >
                <Logo src={logo} width={50} className='img-fluid' alt="logo" />
                
                </Link>
            </Contenedor1>
            <Contenedor2>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto">
                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }} className="nav-link active" aria-current="page" to="/">Home</NavLink>

                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }} className="nav-link" to="/products">Products</NavLink>

                        {
                            cart.length > 0 ? <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "white",
                                };
                            }} className="nav-link" to="/cart">Cart <sup className='fw-bold'>({cart.reduce((a, b) => { return a + (b.quantity); }, 0)})</sup></NavLink>
                                :
                                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "white",
                                    };
                                }} className="nav-link" to="/cart">Cart</NavLink>
                        }

                        {
                            !user.email && <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "white",
                                };
                            }} className="nav-link" to="/login">Login</NavLink>
                        }

                        {
                            user.email && <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "white",
                                };
                            }} className="nav-link" to="/profile">Profile</NavLink>
                        }

                         {
                            user.email &&  <div className="mt-3">
                                <button onClick={logOut} className="btn btn-sm btn-danger">Log Out</button>
                            </div>}

                    </div>
                    
                </div>
            </Contenedor2>
        </Nav>

        </Header>
    )
}

export default NavBar;