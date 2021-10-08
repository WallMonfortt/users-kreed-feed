import React from 'react'
import { useSelector } from 'react-redux';
import { LRepresentative } from './profileOne/LRepresentative';
import { GeneralInfoP3 } from './profileThree/GeneralInfoP3';
import { NavbarP3 } from './profileThree/NavbarP3'

export const ProfileThree = () => {
  const {p3Selected} = useSelector(state => state.profile);
  return (
    <div className="profileOne-main-container">
      <NavbarP3/>
      <h1>{p3Selected}</h1>
      <hr/>
      {(p3Selected === "General") && <GeneralInfoP3/>}
      {(p3Selected === "Legal Representative") && <LRepresentative/>}
    </div>
  )
}
