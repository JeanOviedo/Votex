import React, { Fragment } from "react";

import { ActionModalInfo} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory} from 'react-router'
export default function ModalInfo() 


{
    let modaldata = useSelector((state) => state.modaldata);
 
    const dispatch = useDispatch();
    const history = useHistory();
  function handleClick(evento, data, datoname) {
    evento.preventDefault();
    dispatch(
      ActionModalInfo({
        mensaje: "",
        image:
          "",
        visible: false,
        data: "data",
      }));
    console.log("cerrado", "clik");
    return history.push("/");
  }

  
  return (
<Fragment>
    { modaldata !== "" ? (



        <div key={Math.random(5)}  className="modal" >
        <div>
        
           <h1>{ modaldata.mensaje}</h1>  
         
          
          <img src={modaldata.image} alt={modaldata.image} className="card-image3" />
          
        
        </div>

        <br />
        <button  onClick={(event) => handleClick(event)} className="buscarboton2">Cerrar</button>
      </div>



    ) : ""}
   
   </Fragment>);
}
