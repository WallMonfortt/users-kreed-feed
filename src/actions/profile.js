import { types } from "../types/types";

export const selectProfile = ( profileNumb) =>{
 return async(dispatch) =>{
   dispatch( activeProfile(profileNumb));
 }
};

export const activeProfile = (profileNumb) =>({
  type: types.profileSelected,
  payload:{
    active: true,
    profileNumb: profileNumb
  }
});

export const selectField = (field) =>{
  return(dispatch) =>{
    dispatch({
      type: types.p1Selected,
      payload:{
        p1Selected: field
      }
    })
  }
};

export const selectFieldP3 = (field) =>{
  return(dispatch) =>{
    dispatch({
      type: types.p3Selected,
      payload:{
        p3Selected: field
      }
    })
  }
};



