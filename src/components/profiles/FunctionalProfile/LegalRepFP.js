import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import Swal from 'sweetalert2'
import { useForm } from '../../../hooks/useForm'
import { CURPValidator, RfcValidator } from '../../../helpers/validators'
import { LegalRepAddress } from './LegalRepAddress'
import { updateGralInfoLegalRep } from '../../../actions/user'

export const LegalRepFP = () => {

  const dispatch = useDispatch()

  const {legalRep} = useSelector(state => state.info)

  const [errors, setErrors] = useState()
  const [messaggeError, setMessaggeError] = useState()
  const [gralInfoStatus, setGralInfoStatus] = useState(false)

  const [formValues, handleInputChange] = useForm({
    Nombre: legalRep.Nombre,
    Género: legalRep.Género,
    Fecha_de_nacimiento: legalRep.Fecha_de_nacimiento,
    Entidad_Federativa_de_nacimiento: legalRep.Entidad_Federativa_de_nacimiento,
    País_de_nacimiento: legalRep.País_de_nacimiento,
    Nacionalidad: legalRep.Nacionalidad,
    CURP: legalRep.CURP,
    RFC: legalRep.RFC,
    Estado_civil: legalRep.Estado_civil,
    Correo_electrónico: legalRep.Correo_electrónico,
    Teléfono: legalRep.Teléfono,
    Documento_de_identificación: legalRep.Documento_de_identificación
  });
  const {
    Nombre,
    Género,
    Fecha_de_nacimiento,
    Entidad_Federativa_de_nacimiento,
    País_de_nacimiento,
    Nacionalidad,
    CURP,
    RFC,
    Estado_civil,
    Correo_electrónico,
    Teléfono,
    Documento_de_identificación
  } = formValues

  useEffect(() => {

    setGralInfoStatus(true)
    Object.keys(formValues).filter(k=> {
      if (formValues[k] === "" || formValues[k]===undefined || formValues[k]===null) {
        setGralInfoStatus(false)
        return true
      }return false
    })
  }, [formValues])

  const handleBlur = () =>{
    const RFCValidate = RfcValidator(RFC)
    const CURPValidate = CURPValidator(CURP)

    if (!validator.isDate(Fecha_de_nacimiento)) {
      setMessaggeError('invalid date format')
      return setErrors(true)
    }else if (!RFCValidate) {
      setMessaggeError('invalid RFC')
      return setErrors(true)
    }else if (!CURPValidate) {
      setMessaggeError('invalid CURP')
      return setErrors(true)
    }else if (!validator.isEmail(Correo_electrónico)) {
      setMessaggeError('invalid email')
      return setErrors(true)
    }
    return setErrors(false)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!errors) {
      dispatch(updateGralInfoLegalRep(formValues));
      setMessaggeError('')
      Swal.fire('success','Info updated correctly', 'success')
    }else{
      Swal.fire('Error', `please verify ${messaggeError}`, 'error');
    }
  }
  return (
    <div>
      <h5>Representante_legal</h5>
      <hr/>
      {!gralInfoStatus && <h3 className="alerts">Please comple your information</h3>}
      <form className="flex form-func" onSubmit={handleSubmit}>
      <div>
        <div className="form-control">Nombre:
        <input 
            type="text"
            name= "Nombre"
            autoComplete="false"
            required={true}
            value={ Nombre }
            onChange={ handleInputChange }
        /></div>
        <div className="form-control">Género:
        <select onChange={ handleInputChange } name="Género" required="true">
          <option value={Género}>{Género}</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino"> Femenino </option>
          <option value="No binario">No binario</option>
        </select>
        </div>
        <div className="form-control">CURP: 
          <input 
          type="datetime"
          name= "CURP"
          placeholder='CURP'
          autoComplete="false"
          required={true}
          value={ CURP }
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        </div>

        <div>
        <div className="form-control">Fecha de nacimiento: 
          <input 
          type="datetime"
          name= "Fecha_de_nacimiento"
          placeholder='YYYY-MM-DD'
          autoComplete="false"
          required={true}
          value={ Fecha_de_nacimiento }
          onBlur={handleBlur}
          onChange={ handleInputChange }
          />
        </div>
        <div className="form-control"><div>Entidad Federativa de nacimiento:</div>
        <input 
            type="text"
            name= "Entidad_Federativa_de_nacimiento"
            placeholder="C.P."
            autoComplete="false"
            value={ Entidad_Federativa_de_nacimiento }
            required={true}
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>
        </div>

        <div>
        <div className="form-control"><div>País de nacimiento: </div>
          <input 
          type="text"
          name= "País_de_nacimiento"
          autoComplete="false"
          required={true}
          value={ País_de_nacimiento }
          onChange={ handleInputChange }
          />
        </div>
        <div className="form-control"><div>Nacionalidad:</div>
        <input 
            type="text"
            name= "Nacionalidad"
            autoComplete="false"
            required={true}
            value={ Nacionalidad }
            onChange={ handleInputChange }
        /></div>
        </div>

        <div>
        <div className="form-control"><div>RFC:</div>
        <input 
            type="text"
            name= "RFC"
            autoComplete="false"
            required={true}
            value={ RFC }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>Estado civil: </div>
          <input 
          type="text"
          name= "Estado_civil"
          autoComplete="flase"
          required={true}
          value={ Estado_civil }
          onChange={ handleInputChange }
          />
        </div>
        </div>
        
        <div>
        <div className="form-control"><div>Correo electrónico:</div>
        <input 
            type="email"
            name= "Correo_electrónico"
            autoComplete="false"
            required={true}
            value={ Correo_electrónico }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>Teléfono: </div>
          <input 
          type="text"
          name= "Teléfono"
          placeholder="10 digitos"
          autoComplete="flase"
          required={true}
          value={ Teléfono }
          onChange={ handleInputChange }
          />
        </div>
        </div>

        <div>
        <div className="form-control"><div>Documento de identificación: {Documento_de_identificación} </div>
          <input 
          type="file"
          name= "Documento_de_identificación"
          accept=".pdf, /image"
          placeholder="Documento_de_identificación"
          autoComplete="false"
          // required={true}
          onBlur={handleBlur}
          onChange={ handleInputChange }
          /></div>
        </div>
          
          <div className="vertCenter"><button className="btn" type="submit">Save</button></div>
      </form>

      <hr/>
      <h5>Address</h5>
      <hr/>
      <LegalRepAddress />
    </div>
  )
}
