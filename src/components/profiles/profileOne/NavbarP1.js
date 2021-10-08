import React from 'react'
import { useDispatch } from 'react-redux'
import { selectField } from '../../../actions/profile'

export const NavbarP1 = () => {
  const dispatch = useDispatch()

  const handleChangeField = (e) =>{
    dispatch(selectField(e))
  }
  return (
    <div className="navbarP1">
      <p
        onClick={()=>handleChangeField("General")}
      >General</p>
      <p
        onClick={()=>handleChangeField("Address")}
      >Address</p>
      <p
        onClick={()=>handleChangeField("Bank")}
      >Bank</p>
      <p
        onClick={()=>handleChangeField("Legal Representative")}
      >Legal Representative</p>
    </div>
  )
}
