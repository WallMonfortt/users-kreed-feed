import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { CLABEValidator } from '../../../helpers/validators'
import { useForm } from '../../../hooks/useForm'
import { updateGralInfoBank } from '../../../actions/user'

export const GralInfoBank = () => {
  const {bank} = useSelector(state => state.info)
  const [errors, setErrors] = useState()
  const [messaggeError, setMessaggeError] = useState()
  const [gralInfoStatus, setGralInfoStatus] = useState(false)

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    CLABE: bank.CLABE,
    Banco: bank.Banco
  });

  const{CLABE,Banco} = formValues;
  useEffect(() => {

    setGralInfoStatus(true)
    Object.keys(formValues).filter(k=> {
      if (formValues[k] === "" || formValues[k]===undefined || formValues[k]===null) {
        setGralInfoStatus(false)
        return true
      }return false
    })
  }, [formValues])

  const handleBlur = ()=>{
    const CLABEValidate = CLABEValidator(CLABE)

    if (!CLABEValidate) {
      setMessaggeError('invalid CLABE')
      return setErrors(true)
    }return setErrors(false)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (!errors) {
      dispatch(updateGralInfoBank(formValues));
      setMessaggeError('')
      Swal.fire('success','Info updated correctly', 'success')
    }else{
      Swal.fire('Error', `please verify ${messaggeError}`, 'error');
    }

  }
  return (
    <div>
      <hr/>
      <h5>Bank</h5>
      <hr/>
      {!gralInfoStatus && <h3 className="alerts">Please comple your Bank information</h3>}
      <form className="flex form-func" onSubmit={handleSubmit}>
      <div>
        <div className="form-control">Cuenta CLABE:
        <input 
            type="number"
            name= "CLABE"
            placeholder='18 digitos de la cuenta'
            autoComplete="false"
            required={true}
            value={ CLABE }
            onBlur={handleBlur}
            onChange={ handleInputChange }
        /></div>
        <div className="form-control">Banco:
        <input 
            type="text"
            name= "Banco"
            placeholder="Nacionalidad"
            autoComplete="false"
            required={true}
            value={ Banco }
            onChange={ handleInputChange }
        /></div>
        </div>        
          
        <div className="vertCenter"><button className="btn" type="submit">Save</button></div>
      </form>
    </div>
  )
}
