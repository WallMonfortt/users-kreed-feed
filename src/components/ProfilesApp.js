import React from 'react'
import { useSelector } from 'react-redux'
import { NoSelected } from './NoSelected'
import { ProfileOne } from './profiles/ProfileOne'
import { ProfileThree } from './profiles/ProfileThree'
import { ProfileTwo } from './profiles/ProfileTwo'
import { Sidebar } from './Sidebar'

export const ProfilesApp = () => {

  const {active, profileNumb} = useSelector(state => state.profile)

  return (
    <div className="flex content">
      <Sidebar />

      {(!active) && <NoSelected />}
      {(profileNumb === 1) && <ProfileOne />}
      {(profileNumb === 2) && <ProfileTwo />}
      {(profileNumb === 3) && <ProfileThree />}
    </div>
  )
}
