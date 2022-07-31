import React, { Fragment, useEffect } from "react";
import { useHistory} from 'react-router'



import {
  ActionModal
 
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import Estudiantes from "./Details";
import Modal from "./Modal";

export default function Players() {
  const history = useHistory();
  const dispatch = useDispatch();
  const nombreusuario = useSelector((state) => state.usuario);
  const modal = useSelector((state) => state.modal);


useEffect(() => {
if (nombreusuario === undefined) {
  return history.push("/");
}
}, [history, nombreusuario])


  function handleClick(evento, data, datoname) {
    evento.preventDefault();
    dispatch(ActionModal(data, true, datoname));
    console.log(data.items, "clik");
  }

  return (
    <Fragment>
      <br />

      <div key={Math.random(5)}>
      
       
     
      <h2>¡ Bienvenido {nombreusuario} !</h2> <h4>Selecciona al estudiante por el que vas a votar</h4> <br /> <br /> <br />
        {Estudiantes !== undefined
          ? Estudiantes.map((e) => (
              <div
                className="card" key={Math.random(5)}
                onClick={(event) => handleClick(event, e)}
              >
                <div className="cuadro" key={Math.random(5)}>
                 
               
                </div>{" "}
                <br />
               <img src={e.imageUrl} className="imagevotos" />
                <br />
                <img src={e.clubUrl} className="equipo" />
                <br />
                <h1> {e.name}</h1>
              </div>
            ))
          : !Estudiantes
          ? ""
          : ""}
        <br />
      </div>
      <br /> <br /> <br /></Fragment>
  );
}
