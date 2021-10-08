import React from 'react'
import { useSelector } from 'react-redux'
import { Adress } from './profileOne/Adress';
import { Bank } from './profileOne/Bank';
import { Generalnfo } from './profileOne/Generalnfo';
import { LRepresentative } from './profileOne/LRepresentative';
import { NavbarP1 } from './profileOne/NavbarP1';

export const ProfileOne = () => {
  const {p1Selected} = useSelector(state => state.profile);

  return (
    <div className="profileOne-main-container">
      <NavbarP1 />
      <h1>{p1Selected}</h1>
      <hr/>
      {(p1Selected === "General") && <Generalnfo/>}
      {(p1Selected === "Address") && <Adress/>}
      {(p1Selected === "Bank") && <Bank/>}
      {(p1Selected === "Legal Representative") && <LRepresentative/>}
    </div>
  )
}
