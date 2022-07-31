

export const USUARIO = "USUARIO";
export const MODAL = "MODAL";



export function ActionModal(valor, valor2) {
    console.log("MODAL-----------", valor, valor2);
    return {type: "MODAL", payload: valor, modal: valor2};
}

export function CloseModal(valor) {
    return {type: "MODAL", modal: valor};
}


export function nombreUsuario(valor) {
    console.log("USERRR___", valor);
    return {type: "USUARIO", payload : valor};
}
