import React from 'react'
import { useDispatch } from 'react-redux';
import { selectProfile } from '../actions/profile';

export const Sidebar = () => {

  const dispatch = useDispatch();
 
  
  const handleSelect = (e) =>{
   dispatch(selectProfile(e))
  }
  
  return (
    <div className="sidebar">
    <div className="mb4">
      <h3 className="mt-5 mb-2">
            <i className="fas fa-user-circle"></i>
            <span className="sidebar-username">Profile proposals</span>
      </h3>
    </div>
    <hr/>
      
    <button
      className="sidebar-btn"
      type="submit"
      onClick={()=> handleSelect(1)}
    ><h4>Profile #1</h4>
    </button>

        
      <button
        className="sidebar-btn"
        onClick={()=> handleSelect(2)}
      >
        <h4>Profile #2</h4>
      </button>
      <button
        className="sidebar-btn"
        onClick={()=> handleSelect(3)}
      >
        <h4>Profile #3</h4>
      </button>
    </div>
  )
}
