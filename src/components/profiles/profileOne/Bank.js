import React from 'react'
import { useSelector } from 'react-redux'

export const Bank = () => {
  const {user} = useSelector(state => state.profile)
  return (
    <div className="general-content-bank">
      <div className="flex general-content-item"><div>Cuenta CLABE: <h5>{user.Cuenta_bancaria.CLABE}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Banco: <h5>{user.Cuenta_bancaria.Banco}</h5></div><i className="far fa-edit"></i></div>

    </div>
  )
}
