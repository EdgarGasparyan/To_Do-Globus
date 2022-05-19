import React, {useContext} from "react";
import {NavLink} from "react-router-dom"
import {ThemeContext} from "./Components/ThemeProvider"



const NavBar:React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <>
        
        <nav>
        <div className="nav-wrapper px1">
          <button onClick={toggleTheme}>Theme</button>
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/TodosPage">TodosPage</NavLink></li>
        <li><NavLink to="/globus">Globus</NavLink></li>


      </ul>
    </div>

        </nav>
      
   
    
        </>
    )
}

export default NavBar