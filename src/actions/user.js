import { types } from "../types/types";


export const updateGralInfo = (gralInfo) =>{
  return(dispatch) =>{
    dispatch({
      type: types.fPUpdateGrl,
      payload:{
        generalInfo: gralInfo
      }
    })
  }
};

export const updateGralInfoAddress = (address) =>{
  return(dispatch) =>{
    dispatch({
      type: types.fPUpdateGrlDirection,
      payload:{
        address: address
      }
    })
  }
};

export const updateGralInfoBank = (bank) =>{
  return(dispatch) =>{
    dispatch({
      type: types.fPUpdateBank,
      payload:{
        bank: bank
      }
    })
  }
};

export const updateGralInfoLegalRep = (legalRepInfo) =>{
  return(dispatch) =>{
    dispatch({
      type: types.fPUpdateLegalRep,
      payload:{
        legalRep: legalRepInfo
      }
    })
  }
};

export const updateGralInfoLegalRepDom = (legalRepInfoDom) =>{
  return(dispatch) =>{
    dispatch({
      type: types.fPUpdateLegalRepDom,
      payload:{
        legalRepDom: legalRepInfoDom
      }
    })
  }
};