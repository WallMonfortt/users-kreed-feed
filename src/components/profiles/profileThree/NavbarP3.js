import React from 'react'
import { useDispatch } from 'react-redux'
import { selectFieldP3 } from '../../../actions/profile'

export const NavbarP3 = () => {
  const dispatch = useDispatch()

  const handleChangeField = (e) =>{
    dispatch(selectFieldP3(e))
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