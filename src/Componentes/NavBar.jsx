
import React, {Fragment} from "react";
import Logo from "../logo.png";

import {Link , useLocation} from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  console.log(location)


 


    return (<header className="navbar">
        <div className="logodiv"> {" "}
            <Link to="/"> {" "}
                <img id="logo"
                    src={Logo}
                    className="logo"
                    alt=""/></Link>
        </div>
        <nav className="logoder">
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
              


                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
               
                {/* {location.pathname ==="/players"? ( <Fragment> <div className="Search">
               
                  <input type = "text" placeholder ="Buscar" name="buscador"
                        onChange={
                            (event) => handleBuscar(event)
                        }
                       
                        />  
                          
                </div> 
                
            
               </Fragment> ) : ""} */}
               
                {/* <button className="buscarboton">Buscar</button> */}
            </ul>

            


        </nav>
    </header>);
}
