import { types } from "../types/types";
import user from '../store/user.json'

const initialState = {
  active:false,
  profileNumb:null,
  user: user,
  p1Selected:"General",
  p3Selected:"General",
  fPSelected:"General"
}

export const Reducer = (state = initialState, action)=>{
  
  switch (action.type) {
    case types.profileSelected:
      return{
        ...state,
        active: true,
        profileNumb: action.payload.profileNumb
      }
    
      case types.p1Selected:
        return{
          ...state,
          p1Selected: action.payload.p1Selected
        }

      case types.p3Selected:
        return{
          ...state,
          p3Selected: action.payload.p3Selected
        }

      case types.fPSelected:
        return{
          ...state,
          fPSelected: action.payload.fPSelected
        }

    default:
      return state;
  }
}