import React from 'react'
import { useSelector } from 'react-redux'

export const Adress = () => {
  const {Domicilio} = useSelector(state => state.profile.user)
  return (
    <div className="general-content">
      <div className="flex general-content-item"><div>Calle o Avenida: <h5>{Domicilio.Calle_o_Avenida}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Número exterior: <h5>{Domicilio.Número_exterior}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Número interior: <h5>{Domicilio.Número_interior}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Código Postal: <h5>{Domicilio.Código_Postal}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Colonia o Urbanización: <h5>{Domicilio.Colonia_o_Urbanización}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Ciudad o Población: <h5>{Domicilio.Ciudad_o_Población}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Entidad Federativa o Estado: <h5>{Domicilio.Entidad_Federativa_o_Estado}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>País: <h5>{Domicilio.País}</h5></div><i className="far fa-edit"></i></div>
    </div>
  )
}
