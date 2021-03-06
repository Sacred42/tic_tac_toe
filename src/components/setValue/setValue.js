import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Area from '../area/area';
import './setValue.css';


const SetValue = () =>{
    let activeValue = useSelector(state => state.ValeusReducer);
    let X_PLAYER = useSelector(state => state.Xplayer);
    let O_PLAYER = useSelector(state => state.Oplayer);
    const [value, setValue] = useState(null);
    const [buttons, setButtons] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=>{
        console.log('!!!');
        if(buttons.length > 0)
        setButtons(Area());
        if(value){
            console.log('check')
        }
    } , [buttons, value])

    

    const DefineActive = (active, id) =>{
        if(active == 'X'){
           dispatch({type: 'X_PLAYER' , payload : id})
        }else{
            dispatch({type: 'O_PLAYER' , payload : id})
        }
    }

    const Set = (event)=>{
        if(event.target.className){
            alert('Клетка занята!')
        }else{
            event.target.classList.add(activeValue);
            DefineActive(activeValue , event.target.id);
            dispatch({type: 'CHANGE_VALUE' , payload : (activeValue)});
        }
        
    }

    // const getWinner = () =>{
    //     setValue(O_PLAYER);
    // }

  
    return(
        <div className='area'><Area Set={Set}/></div>
    )
}

export default SetValue;