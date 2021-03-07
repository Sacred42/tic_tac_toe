import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Area from '../area/area';
import './setValue.css';


const SetValue = () =>{
    let activeValue = useSelector(state => state.ValeusReducer);
    let X_PLAYER = useSelector(state => state.Xplayer);
    let O_PLAYER = useSelector(state => state.Oplayer);
    const [value, setValue] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(value.length <= 0){
            setValue(Array.prototype.slice.call(document.querySelector('.area').children));
        }
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
        console.log(value);
        value.forEach((elem)=>elem.className = '');
    }

    const getWinner = (player) =>{
        alert(`Победитель - ${player}`)
        cleaner()
    }

    const setMark = () =>{
        
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
            // проверка на наличие класса A
            // функ-ия для 
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