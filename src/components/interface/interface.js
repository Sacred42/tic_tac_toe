import React from 'react';
import { useSelector } from 'react-redux';
import './interface.css';

const Interface = () => {
    let activeValue = useSelector(state => state.ValeusReducer);

    return(
        <InterfaceView active={activeValue} />
    )
}

export default Interface;

const InterfaceView = ({active}) =>{
  return(
    <React.Fragment>
        {active == 'X' ? (
        <div className='interface'>
            <label>Ход игрока </label>
            <div className='interface_links'>
              <a href="" className ='ActivePlayer'>X</a>
              <a href="">O</a>
            </div>
            
        </div>) :
        <div className='interface'>
            <label>Ход игрока </label>
            <div className='interface_links'>
              <a href="">X</a>
              <a href="" className ='ActivePlayer'>O</a>
            </div>
            
        </div>}
       
    </React.Fragment>
  )
}
