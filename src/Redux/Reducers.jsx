import {  MODAL , USUARIO , MODALINFO} from "./Actions.jsx";
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
      
        modal: action.modal,
      
      };

      
    case MODALINFO:
      return {
        ...state,
        modaldata: action.payload,
        
      
      };

    default:
      return state;
  }
}
