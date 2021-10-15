import React from 'react'
import { useSelector } from 'react-redux'
import { NavbarFP } from './FunctionalProfile/NavbarFP'
import { GralInfo } from './FunctionalProfile/GralInfoFP'
import { LegalRepFP } from './FunctionalProfile/LegalRepFP'

export const FuncProfile = () => {
  const {fPSelected} = useSelector(state => state.profile);

  return (
    <div className="profileOne-main-container">
     <NavbarFP />
      {(fPSelected === "General") && <GralInfo/>}
      {(fPSelected === "Legal Representative") && <LegalRepFP/>}
      
    </div>
  )
}
