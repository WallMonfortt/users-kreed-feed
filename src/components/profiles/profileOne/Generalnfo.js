import React from 'react'
import { useSelector } from 'react-redux'

export const Generalnfo = () => {
  const {user} = useSelector(state => state.profile)
 
  return (
    <div className="general-content">
      <div className="flex general-content-item"><div>Nombre comercial: <h5>{user.Nombre_comercial}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Correo electrónico: <h5>{user.Dirección_de_correo_electrónico}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Número telefónico: <h5>{user.Número_telefónico}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Nacionalidad: <h5>{user.Nacionalidad}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>RFC: <h5>{user.RFC}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Razon Social: <h5>{user.razon_social}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Régimen Fiscal: <h5>{user.Régimen_Fiscal}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Fecha de constitución: <h5>{user.Fecha_de_constitución}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Comprobante de domicilio: <h5>{user.Comprobante_de_domicilio}</h5></div><i className="far fa-edit"></i></div>
            
    </div>
  )
};
