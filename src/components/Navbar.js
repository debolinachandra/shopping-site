import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

const Navbar = () => {
    const[toggle,setToggle]=React.useState(false);

    const toggleNav=()=>{
        setToggle(!toggle);

    }

    
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logoBtn">
                    <Link to="/"><img src={logo} alt="logo" />
                    <p><span>C</span>lothes</p>
                    </Link>

                    <div className="shopping-icon mobile-shopping">
                    <i class="fas fa-shopping-cart"></i><span>0</span>  
                    </div>  
               
                    <div className="hamburger" onClick={toggleNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="links">
                        <div className={toggle ? "new-links-navigation":"links-navigation"}>
                            <div className="nav-btn">
                                <span onClick={toggleNav}>x</span>
                            </div>


                            <ul className="links-nav" onClick={toggleNav}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>


                        </div>
                    </div>

                    
                    <Link to="/cart">
                        <div className="shopping-icon">
                        <i class="fas fa-shopping-cart"></i><span>0</span>  
                        </div>
                    </Link>
            </nav>
        </div>
    )
}

export default Navbar


//<i class="fas fa-shopping-cart"></i>