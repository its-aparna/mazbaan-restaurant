import { Link, useNavigate } from "react-router-dom"
import NavPage from "./NavPage"
import { useState } from "react"
import "../Nav/navbar.css"
import { useSelector } from "react-redux";
export default function Navbar() {
    let {currentUser} = useSelector(state=>state.rest);

    const openNavPage = () => {
        setNavStatus(true);
    }
    const [navStatus, setNavStatus] = useState(false);
    return <>
        <nav id="navbar">
            <h1 id="brand-name">mezbaan</h1>
            {!currentUser&& <Link to="/signin">
                  <button className="main-btn mt-2" type="button">
                    Sign in
                  </button>
                </Link>}
            {currentUser&&!navStatus && <span onClick={openNavPage}><i id="hamburger" className="fa-solid fa-bars"></i></span>}
          
            {navStatus && <NavPage navStatus={navStatus} setNavStatus={setNavStatus} />}
           
        </nav>
        

    </>
}