import React from 'react';
import './area.css';


const Area = (props) =>{
 const singleButton = (key , fn) =>{ // создание одного jsx элемента 
    
    return (
        <button key={key} id={key + 1} onClick = {fn}></button>
    )
 }

 const getButtons = (singleButton , fn) =>{ // вставка 9 jsx Элемнтов в массив
     let newArr = [];
     for (let i = 0; i < 9; i++){
           newArr.push(singleButton(i , fn));
     }
     return newArr;
     
 }
 return ( // получение jsx элементов в массиве!
      getButtons(singleButton, props.Set)
  )
}

export default Area;