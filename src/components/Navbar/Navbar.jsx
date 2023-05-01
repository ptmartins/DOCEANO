import React from 'react';
import { logo_small} from '../../assets';
import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Cetaceans } from '../../pages';

const Navbar = () => {

    const location = useLocation();

    if (location.pathname === '/') {
        return(
            <div className='navbar'>
                <div className="inner-container">
                    <div className="navbar__logo">
                        <a href="/" className="navbar__link navbar__link--logo">
                            <img src={logo_small} alt="" />
                        </a>
                    </div>
                    <div className="navbar__section navbar__section--main">
                        <NavLink to="/cetaceans" element={<Cetaceans />} className="navbar__link navbar__link--btn" > Entrar </NavLink> 
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='navbar'>
                <div className="inner-container">
                    <div className="navbar__logo">
                        <a href="/" className="navbar__link navbar__link--logo">
                            <img src={logo_small} alt="" />
                        </a>
                    </div>
                    <div className="navbar__section navbar__section--main">
                        <NavLink to="/cetaceans" className={({isActive}) => (isActive ? 'navbar__link is-active' : 'navbar__link')} > Cetaceos </NavLink>
                        <NavLink to="/pinipedes" className={({isActive}) => (isActive ? 'navbar__link is-active' : 'navbar__link')} > Pinipedes </NavLink>
                        <NavLink to="/" className="navbar__link navbar__link--btn" > Observar </NavLink> 
                    </div>
                </div>
            </div>
        )
    }


    // return (
    //     <div className='navbar'>
    //         <div className="inner-container">
    //             <div className="navbar__logo">
    //                 <a href="/" className="navbar__link navbar__link--logo">
    //                     <img src={logo_small} alt="" />
    //                 </a>
    //             </div>
    //             <div className="navbar__section navbar__section--main">
    //                 <NavLink to="/cetaceans" className={({isActive}) => (isActive ? 'navbar__link is-active' : 'navbar__link')} > Cetaceos </NavLink>
    //                 <NavLink to="/pinipedes" className={({isActive}) => (isActive ? 'navbar__link is-active' : 'navbar__link')} > Pinipedes </NavLink>
    //                 <NavLink to="/" className="navbar__link navbar__link--btn" > Observar </NavLink> 
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Navbar; 