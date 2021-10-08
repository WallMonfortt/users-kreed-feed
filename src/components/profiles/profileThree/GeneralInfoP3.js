import React from 'react'
import { useSelector } from 'react-redux';

export const GeneralInfoP3 = () => {
  const {user} = useSelector(state => state.profile);
  const {Domicilio} = useSelector(state => state.profile.user);
  return (
    <div className="general-content-lRep" >
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
      <hr/>
      <h2>Address</h2>
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
      <hr/>
      <h2>Bank</h2>
      <div className="general-content-bank">
        <div className="flex general-content-item"><div>Cuenta CLABE: <h5>{user.Cuenta_bancaria.CLABE}</h5></div><i className="far fa-edit"></i></div>
        <div className="flex general-content-item"><div>Banco: <h5>{user.Cuenta_bancaria.Banco}</h5></div><i className="far fa-edit"></i></div>
      </div>
    </div>
  )
}
