import React from 'react'
import { useSelector } from 'react-redux'

export const ProfileTwo = () => {
  const {user} = useSelector(state => state.profile);
  const {Domicilio} = useSelector(state => state.profile.user);
  const {Representante_legal} = useSelector(state => state.profile.user);

  return (
    <div  className="profileOne-two-container">
      <h1>General information</h1>
      <hr/>
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
      <h1>Legal Representative </h1>
      <hr/>
      <h2>General information</h2>
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
      <h2>Adress</h2>
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
