import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { updateGralInfo } from '../../../actions/user'
import { useForm } from '../../../hooks/useForm'
import { phoneValidator, RfcValidator, strValidator } from '../../../helpers/validators'
import { GralAddress } from './GralAddress'
import { GralInfoBank } from './GralInfoBank'

export const GralInfo = () => {

  const [errors, setErrors] = useState()
  const [messaggeError, setMessaggeError] = useState()
  const [gralInfoStatus, setGralInfoStatus] = useState(false)
  
  const dispatch = useDispatch()

  const {fPSelected} = useSelector(state => state.profile);
  const {generalInfo} = useSelector(state => state.info);

  const [formValues, handleInputChange] = useForm({
    Nombre_comercial: generalInfo.Nombre_comercial,
    razon_social: generalInfo.razon_social,
    Nacionalidad:generalInfo.Nacionalidad,
    Fecha_de_constitución:generalInfo.Fecha_de_constitución,
    RFC:generalInfo.RFC,
    Régimen_Fiscal:generalInfo.Régimen_Fiscal,
    Industria:generalInfo.Industria,
    Comprobante_de_domicilio:generalInfo.Comprobante_de_domicilio,
    Número_telefónico:generalInfo.Número_telefónico,
    Dirección_de_correo_electrónico:generalInfo.Dirección_de_correo_electrónico
  });
  
  const {
    Nombre_comercial, 
    razon_social,
    Nacionalidad,
    Fecha_de_constitución,
    RFC,
    Régimen_Fiscal,
    Industria,
    Comprobante_de_domicilio,
    Número_telefónico,
    Dirección_de_correo_electrónico
  } = formValues;

  useEffect(() => {

    setGralInfoStatus(true)
    Object.keys(formValues).filter(k=> {
      if (formValues[k] === "" || formValues[k]===undefined || formValues[k]===null) {
        setGralInfoStatus(false)
        return true
      }return false
    })
  }, [formValues])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!errors) {
      dispatch(updateGralInfo(formValues));
      setMessaggeError('')
      Swal.fire('success','Info updated correctly', 'success')
    }else{
      Swal.fire('Error', `please verify ${messaggeError}`, 'error');
    }
  }

  const handleBlur = () =>{

    const RFCvalidate = RfcValidator(RFC);
    const industryValidate = strValidator(Industria);
    const phoneValidate = phoneValidator(Número_telefónico);
    
    if (!validator.isDate(Fecha_de_constitución)) {
      setMessaggeError('invalid date format')
      return setErrors(true)
    }else if (!RFCvalidate) {
      setMessaggeError('invalid RFC')
      return setErrors(true)
    }else if (!industryValidate) {
      setMessaggeError('invalid industry')
      return setErrors(true)
    }else if (!phoneValidate) {
      setMessaggeError('invalid Phone number')
      return setErrors(true)
    }else if (!validator.isEmail(Dirección_de_correo_electrónico)) {
      setMessaggeError('invalid email')
      return setErrors(true)
    }
    return setErrors(false)
  }


  return (
    <div className="profileOne-main-container">

     {!gralInfoStatus && <h3 className="alerts">Please comple your general information</h3>}

     <h5>{fPSelected}</h5>
      <hr/>

      <form className="flex form-func" onSubmit={handleSubmit}>
      <div>
        <div className="form-control">Nombre comercial:
        <input 
            type="text"
            name= "Nombre_comercial"
            placeholder="Nombre Comercial"
            autoComplete="false"
            required={true}
            value={ Nombre_comercial }
            onChange={ handleInputChange }
        /></div>

        <div className="form-control">Razon Social:
        <select onChange={ handleInputChange } name="razon_social" required="true">
          <option value={razon_social}>{razon_social}</option>
          <option value="Sociedad en Comandita Simple (S. en C. S.)">Sociedad en Comandita Simple (S. en C. S.)</option>
          <option value="Sociedad en Comandita por Acciones (S. en C. por A.)"> Sociedad en Comandita por Acciones (S. en C. por A.)</option>
          <option value="Sociedad de Responsabilidad Limitada (S. DE R.L.)">Sociedad de Responsabilidad Limitada (S. DE R.L.)</option>
          <option value="Sociedad Anónima (S.A.)">Sociedad Anónima (S.A.)</option>
          <option value="Sociedad Cooperativa (S.C.)">Sociedad Cooperativa (S.C.)</option>
          <option value="other">other</option>
        </select>
        </div>
        </div>

        <div>
        <div className="form-control">Nacionalidad:
        <input 
            type="text"
            name= "Nacionalidad"
            placeholder="Nacionalidad"
            autoComplete="false"
            required={true}
            value={ Nacionalidad }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control">Fecha de constitución: 
          <input 
          type="datetime"
          name= "Fecha_de_constitución"
          placeholder="YYYY-MM-DD"
          autoComplete="false"
          required={true}
          value={ Fecha_de_constitución }
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        </div>

        <div>
        <div className="form-control"><div>RFC:</div>
        <input 
            type="text"
            name= "RFC"
            placeholder="RFC"
            autoComplete="false"
            value={ RFC }
            required={true}
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>Régimen Fiscal: </div>
          <input 
          type="text"
          name= "Régimen_Fiscal"
          placeholder="Régimen Fiscal"
          autoComplete="false"
          required={true}
          value={ Régimen_Fiscal }
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        </div>

        <div>
        <div className="form-control"><div>Industria:</div>
        <input 
            type="text"
            name= "Industria"
            placeholder="Industria"
            autoComplete="false"
            required={true}
            value={ Industria }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>Comprobante de domicilio: {Comprobante_de_domicilio} </div>
          <input 
          type="file"
          name= "Comprobante_de_domicilio"
          accept=".pdf, /image"
          placeholder="Comprobante_de_domicilio"
          autoComplete="false"
          // required={true}
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        </div>

        <div>
        <div className="form-control"><div>Número telefónico:</div>
        <input 
            type="tel"
            name= "Número_telefónico"
            placeholder="10 dígitos "
            autoComplete="false"
            required={true}
            value={ Número_telefónico }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>Dirección de correo electrónico: </div>
          <input 
          type="email"
          name= "Dirección_de_correo_electrónico"
          placeholder="Dirección de correo electrónico"
          autoComplete="flase"
          required={true}
          value={ Dirección_de_correo_electrónico }
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        </div>
        
          
          <div className="vertCenter"><button className="btn" type="submit">Save</button></div>
      </form>

      <hr/>
      <h5>Address</h5>
      <hr/>
      <GralAddress />
      <GralInfoBank />
    </div>
  )
}
