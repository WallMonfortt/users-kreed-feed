import React from 'react'
import { useDispatch } from 'react-redux'
import { selectFieldFP } from '../../../actions/profile'

export const NavbarFP = () => {
  const dispatch = useDispatch()

  const handleChangeField = (e) =>{
    dispatch(selectFieldFP(e))
  }
  return (
    <div className="navbarP1">
      <p
        onClick={()=>handleChangeField("General")}
      >General</p>
      <p
        onClick={()=>handleChangeField("Legal Representative")}
      >Legal Representative</p>
    </div>
  )
}