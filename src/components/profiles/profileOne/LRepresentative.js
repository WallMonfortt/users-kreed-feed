import React from 'react'
import { useSelector } from 'react-redux'

export const LRepresentative = () => {
  const {Representante_legal} = useSelector(state => state.profile.user)
  return (
    <div className="general-content-lRep">
      <h2>General info</h2>
      <div className="general-content">
      <div className="flex general-content-item"><div>Nombre: <h5>{Representante_legal.Nombre}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Género: <h5>{Representante_legal.Género}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Fecha de nacimiento: <h5>{Representante_legal.Fecha_de_nacimiento}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Entidad Federativa de nacimiento: <h5>{Representante_legal.Entidad_Federativa_de_nacimiento}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>País de nacimiento: <h5>{Representante_legal.País_de_nacimiento}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Nacionalidad: <h5>{Representante_legal.Nacionalidad}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>CURP: <h5>{Representante_legal.CURP}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>RFC: <h5>{Representante_legal.RFC}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Estado civil: <h5>{Representante_legal.Estado_civil}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Correo electrónico: <h5>{Representante_legal.Correo_electrónico}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Teléfono: <h5>{Representante_legal.Teléfono}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Documento de identificación: <h5>{Representante_legal.Documento_de_identificación}</h5></div><i className="far fa-edit"></i></div>
      </div>
      <hr/>
      <h2>Address</h2>
      <div className="general-content">
      <div className="flex general-content-item"><div>Calle o Avenida: <h5>{Representante_legal.Domicilio.Calle_o_Avenida}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Número exterior: <h5>{Representante_legal.Domicilio.Número_exterior}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Número interior: <h5>{Representante_legal.Domicilio.Número_interior}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Código Postal: <h5>{Representante_legal.Domicilio.Código_Postal}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Colonia o Urbanización: <h5>{Representante_legal.Domicilio.Colonia_o_Urbanización}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Ciudad o Población: <h5>{Representante_legal.Domicilio.Ciudad_o_Población}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>Entidad Federativa o Estado: <h5>{Representante_legal.Domicilio.Entidad_Federativa_o_Estado}</h5></div><i className="far fa-edit"></i></div>
      <div className="flex general-content-item"><div>País: <h5>{Representante_legal.Domicilio.País}</h5></div><i className="far fa-edit"></i></div>
      </div>
    </div>
  )
}
