import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router";

import { ActionModalInfo } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import Estudiantes from "./Details";
import ModalInfo from "./ModalInfo";

export default function Players() {
  const history = useHistory();
  const dispatch = useDispatch();
  const nombreusuario = useSelector((state) => state.usuario);
  const modaldata = useSelector((state) => state.modaldata);

  useEffect(() => {
    if (nombreusuario === undefined) {
      return history.push("/");
    }
  }, [history, nombreusuario]);

  function handleClick(evento, data, datoname) {
    evento.preventDefault();
    dispatch(
      ActionModalInfo({
        mensaje: "Voto Exitoso",
        image:
          "https://sdk.bitmoji.com/render/panel/5b7bff30-d7cc-4141-9f91-d77fa135057f-6946fa3f-8a80-46c0-a268-3165edad3741-v1.png?transparent=1&palette=1",
        visible: true,
        data: data,
      })
    );
    console.log(modaldata, "clik data");
  }

  return (
    <Fragment>
      <br />

      <div key={Math.random(5)}>
        {modaldata.visible ? <ModalInfo></ModalInfo> : ""}
        <h2>¡ Bienvenido {nombreusuario}!</h2>
        <h4>Selecciona al estudiante por el que vas a votar</h4>
        <br />
        <br />
        <br />{" "}
        {Estudiantes !== undefined
          ? Estudiantes.map((e) => (
              <div
                className="card"
                key={Math.random(5)}
                onClick={(event) => handleClick(event, e)}
              >
                <div className="cuadro" key={Math.random(5)}></div> <br />
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
      <br />
      <br />
      <br />
    </Fragment>
  );
}
