import React from "react";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ima from "../Icos/ok.webp";
import Ima2 from "../Icos/ok.png";
import Modal from "./Modal";
import { ActionModal , CloseModal, nombreUsuario , ActionModalInfo } from "../Redux/Actions";
import { useHistory} from 'react-router'


export default function Landing() {
  const history = useHistory();

  const [buscar, setBuscar] = useState("");
  const modal = useSelector((state) => state.modal);
  const nombreUser = useSelector((state) => state.usuario);
  const dispatch = useDispatch();
  const Usuarios = [
    {
      nombre: "Fulanito Perez",
      documento: "1234",
      registroDia: new Date("2012-02-03"),
      otro: 7,
      curso: "11A",
      voto: false,
    },
    {
      nombre: "Perejil Lopez",
      documento: "123456789",
      registroDia: new Date("2012-02-03"),
      otro: 7,
      curso: "11B",
      voto: false,
    },
  ];

  function handleBuscar(event ) {
    dispatch(CloseModal(false));

    event.preventDefault();
    console.log("ELEMENTO A BUSCAR" , buscar)
    Usuarios.forEach((object) => {
      if (object.documento === buscar) {
        console.log("handleBuscar", "documento valido");
        dispatch(CloseModal(false));
        dispatch(nombreUsuario(object.nombre));
        console.log("nomberUser", nombreUser);

        console.log("modal", modal);
        return history.push("/players");
       
      }
      if (object.documento !== buscar) {
        
        dispatch(
          ActionModalInfo({
            mensaje: "Error Cedula no encontrada",
            image:
              "https://cdn-icons-png.flaticon.com/512/3362/3362051.png",
            visible: true,
            data: "data",
          })
        );

        setTimeout(() => {
          dispatch(CloseModal(false));

          
        }, 3000);
      } 
     
    
    }
    );
  }

  function handleText(event) {
    event.preventDefault();
    setBuscar(event.target.value);
  }

  return (
    <Fragment>
      
      {modal === true ? <Modal /> : ""}
      <div className="container" id="container">
        <div id="left" className="left">
          <img src={Ima} className="Ima"></img>
        </div>
        <div id="right" className="right">
          <h2>¡Digita tu Documento!</h2>
          <center>
            <input
              type="number"
              placeholder="Ecriba aqui su documento de identificación"
              className="input"
              value={buscar}
              onChange={(event) => handleText(event)}
            />

            <button onClick={(event) => handleBuscar(event)} className="boton">
              Votar
            </button>
          </center>
        </div>
      </div>
      <div className="container" id="container">
        <div id="izquierda" className="izquierda">
          <img src={Ima2} className={"Ima2"} />
        </div>
        <div id="right" className="derecha">
          <h2>Comienza</h2>
          <p>
            La app tiene un campo para introducir tu documento de identificación
            para poder votar.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
