import {  MODAL , USUARIO} from "./Actions.jsx";
const initialState = {
  usuario: "",
  modal: false,
  modaldata: [],
 
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
   
    

    case USUARIO:
      return {
        ...state,
        usuario: action.payload,
        
      
      };

    case MODAL:
      return {
        ...state,
        modaldata: action.payload,
        modal: action.modal,
      
      };

    default:
      return state;
  }
}
