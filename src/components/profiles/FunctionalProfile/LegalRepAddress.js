import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { updateGralInfoLegalRepDom } from '../../../actions/user';
import { useForm } from '../../../hooks/useForm';

export const LegalRepAddress = () => {
  const {legalRepDom} = useSelector(state => state.info)

  const [errors, setErrors] = useState()
  const [messaggeError, setMessaggeError] = useState()
  const [gralInfoStatus, setGralInfoStatus] = useState(false)


  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    Calle_o_Avenida: legalRepDom.Calle_o_Avenida,
    Número_exterior:legalRepDom.Número_exterior,
    Número_interior: legalRepDom.Número_interior,
    Código_Postal: legalRepDom.Código_Postal,
    Colonia_o_Urbanización:legalRepDom.Colonia_o_Urbanización,
    Ciudad_o_Población:legalRepDom.Ciudad_o_Población,
    Entidad_Federativa_o_Estado:legalRepDom.Entidad_Federativa_o_Estado,
    País:legalRepDom.País
  });
  
  const {
    Calle_o_Avenida,
    Número_exterior,
    Número_interior,
    Código_Postal,
    Colonia_o_Urbanización,
    Ciudad_o_Población,
    Entidad_Federativa_o_Estado,
    País
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
      dispatch(updateGralInfoLegalRepDom(formValues));
      setMessaggeError('')
      Swal.fire('success','Info updated correctly', 'success')
    }else{
      Swal.fire('Error', `please verify ${messaggeError}`, 'error');
    }
  }

  const handleBlur = () =>{
    if(!validator.isPostalCode(Código_Postal.toString(), 'MX')){
      setMessaggeError('Invalid Postal Code')
      return setErrors(true)
    }
    return setErrors(false)
  }
  return (
    <div>
     {!gralInfoStatus && <h3 className="alerts">Please comple Address information</h3>}
      <form className="flex form-func" onSubmit={handleSubmit}>
      <div>
        <div className="form-control">Calle o Avenida:
        <input 
            type="text"
            name= "Calle_o_Avenida"
            autoComplete="false"
            required={true}
            value={ Calle_o_Avenida }
            onChange={ handleInputChange }
        /></div>
        <div className="form-control">Número exterior:
        <input 
            type="text"
            name= "Número_exterior"
            placeholder="Nacionalidad"
            autoComplete="false"
            required={true}
            value={ Número_exterior }
            onChange={ handleInputChange }
        /></div>
        </div>

        <div>
        <div className="form-control">Número interior: 
          <input 
          type="text"
          name= "Número_interior"
          autoComplete="false"
          required={true}
          value={ Número_interior }
          onChange={ handleInputChange }
          />
        </div>
        <div className="form-control"><div>Código Postal:</div>
        <input 
            type="num"
            name= "Código_Postal"
            placeholder="C.P."
            autoComplete="false"
            value={ Código_Postal }
            required={true}
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>
        </div>

        <div>
        <div className="form-control"><div>Colonia o Urbanización: </div>
          <input 
          type="text"
          name= "Colonia_o_Urbanización"
          autoComplete="false"
          required={true}
          value={ Colonia_o_Urbanización }
          onChange={ handleInputChange }
          />
        </div>
        <div className="form-control"><div>Ciudad o Población:</div>
        <input 
            type="text"
            name= "Ciudad_o_Población"
            autoComplete="false"
            required={true}
            value={ Ciudad_o_Población }
            onChange={ handleInputChange }
        /></div>
        </div>

        <div>
        <div className="form-control"><div>Entidad Federativa o Estado:</div>
        <input 
            type="text"
            name= "Entidad_Federativa_o_Estado"
            autoComplete="false"
            required={true}
            value={ Entidad_Federativa_o_Estado }
            onChange={ handleInputChange }
        /></div>

        <div className="form-control"><div>País: </div>
          <input 
          type="text"
          name= "País"
          placeholder="Dirección de correo electrónico"
          autoComplete="flase"
          required={true}
          value={ País }
          onChange={ handleInputChange }
          />
        </div>
        </div>
        
          
          <div className="vertCenter"><button className="btn" type="submit">Save</button></div>
      </form>
    </div>
  )
}
