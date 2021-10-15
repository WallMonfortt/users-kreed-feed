import { types } from "../types/types";
import userEdit from '../store/userEdit.json'

const generalInfo = userEdit.generalInfo;
const address = userEdit.Domicilio;
const bank = userEdit.Cuenta_bancaria;
const legalRep = userEdit.Representante_legal;
const legalRepDom = userEdit.DomicilioRepLeg;

const initialState = {
  generalInfo: generalInfo,
  address: address,
  bank: bank,
  legalRep: legalRep,
  legalRepDom: legalRepDom
}

export const userReducer = (state = initialState, action)=>{
  
  switch (action.type) {
    case types.fPUpdateGrl:
      return{
        ...state,
        generalInfo: action.payload.generalInfo
      }

    case types.fPUpdateGrlDirection:
      return{
        ...state,
        address: action.payload.address
      }

    case types.fPUpdateBank:
      return{
        ...state,
        bank: action.payload.bank
      }

    case types.fPUpdateLegalRep:
      return{
        ...state,
        legalRep: action.payload.legalRep
      }

    case types.fPUpdateLegalRepDom:
      return{
        ...state,
        legalRepDom: action.payload.legalRepDom
      }

    default:
      return state;
  }
}