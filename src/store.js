import {ValeusReducer , Xplayer , Oplayer} from './reducer/ValuesRudecer';
import {combineReducers, createStore} from 'redux';

const reducer = combineReducers ({
    ValeusReducer : ValeusReducer,
    Xplayer : Xplayer,
    Oplayer : Oplayer
});

const store = createStore(reducer);

export default store;
