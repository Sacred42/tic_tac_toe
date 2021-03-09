import { cleanup } from '@testing-library/react';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Area from '../area/area';
import './setValue.css';


const SetValue = () =>{
    // const area = Array.prototype.slice.call(document.querySelector('.area').children);
    let activeValue = useSelector(state => state.ValeusReducer);
    let X_PLAYER = useSelector(state => state.Xplayer);
    let O_PLAYER = useSelector(state => state.Oplayer);
    const [value, setValue] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=>{
        draw();
        setValue(Array.prototype.slice.call(document.querySelector('.area').children));
        if(X_PLAYER == 'X' ){
            getWinner(X_PLAYER );
        }
        if(O_PLAYER == 'O'){
            getWinner(O_PLAYER );
        }
    } , [X_PLAYER, O_PLAYER])

    const cleaner = () => {
        dispatch({type: 'VALUE_INITIAL'});
        dispatch({type : 'X_INITIAL'});
        dispatch({type: 'O_INITIAL'});
        value.forEach((elem)=>elem.className = '');
    }

    const draw = () =>{
        setTimeout(()=>{
            if(value.length !== 0){
                let draw =  value.filter((elem)=> elem.className == '');
                console.log(value);
                if(draw.length == 0){
                     alert('Ничья!');
                     cleaner();    
                }
            }
        }, 0)
    }
    const getWinner = (player) =>{
        alert(`Победитель - ${player}`)
        cleaner();
    }

    const defineActive = (active, id) =>{
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
            defineActive(activeValue , event.target.id);
            dispatch({type: 'CHANGE_VALUE' , payload : (activeValue)});
            
        }   
    }

    return(
        <div className='area'><Area Set={Set}/></div>
    )
}

export default SetValue;