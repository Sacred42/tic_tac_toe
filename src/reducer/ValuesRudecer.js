import {favourableValues} from '../components/data/data';
const ValeusReducer = (state = 'X' , action)=>{
    switch(action.type){
        case 'VALUE_INITIAL':
            return 'X';
        case 'CHANGE_VALUE':
            return action.payload == 'X' ? state = 'O' : state = 'X';
        default : return state
    }

}

const Xplayer = (state = '', action)=>{
    switch(action.type){
        case 'X_INITIAL':
            return '';
        case 'X_PLAYER':
            state += action.payload;
            let sortedValeus =  state.split('').sort((a,b)=>a-b).join('');
            for(let i = 0; i < favourableValues.length; i++){ 
               let newArr = favourableValues[i].filter((elem)=> sortedValeus.includes(elem))
               if(newArr.length == 3){
               return state = 'X';
               }
               else{
                   continue; 
               }
            }
       
    default: return state;
    }
}

const Oplayer = (state = '', action)=>{
    switch(action.type){
        case 'O_INITIAL':
            return '';
        case 'O_PLAYER':
            state += action.payload;
            let sortedValeus = state.split('').sort((a,b)=>a-b).join('');
            for(let i = 0; i < favourableValues.length; i++){
                let newArr = favourableValues[i].filter((elem)=> sortedValeus.includes(elem));
                if(newArr.length == 3){
                   return state = 'O';
                }
                else{
                    continue;
                }
            }
          
            default: return state;
    }
    
}

export {ValeusReducer, Xplayer, Oplayer };