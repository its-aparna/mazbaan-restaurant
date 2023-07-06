import { Link, useNavigate } from "react-router-dom";
import "../Nav/navpage.css"
import { useDispatch, useSelector } from "react-redux";
export default function NavPage({navStatus,setNavStatus}) {
    let {currentUser} = useSelector(state=>state.rest);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signOut = ()=>{
       dispatch(signOut());
       navigate("/");
    }
    let navOverlay;
    const closeNavpage = ()=>{
        navOverlay.style.transform = "translate(0px,-100vh)";
        
        setTimeout(() => {
            setNavStatus(false)
        }, 1000);
    }
    
    return <div ref={navpage => navOverlay = navpage} id="nav-overlay" className="my-overlay">
        <div className="cross" onClick={closeNavpage}><i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div id="nav-menu">
            <Link to="/" style={{textDecoration:'none'}}><h3 className="navLink">Home</h3></Link>
            
            <Link to='/reviews' style={{textDecoration:'none'}} ><h3 className="navLink">Reviews</h3></Link>
            <Link to='/history' style={{textDecoration:'none'}} ><h3 className="navLink">History</h3></Link>
            <Link to='/plan' style={{textDecoration:'none'}} ><h3 className="navLink">Plans</h3></Link>
            <Link to='/profile' style={{textDecoration:'none'}} ><h3 className="navLink">Profile</h3></Link>
            {currentUser&&<Link onClick={signOut}><center><button className="main-btn mt-2">Sign Out</button></center></Link>}
        </div>
    </div>
}
