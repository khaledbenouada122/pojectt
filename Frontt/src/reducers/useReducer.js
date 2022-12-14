import React from 'react';

import { ADD_USER,GET_USER } from '../Actions/types';

const initState = {
    users:[]
}

const userReducer = (state= initState ,{type,payload} )=>{
    switch(type){
    case ADD_USER:
        return {...state,users:[...state.users,payload]}
    case GET_USER:
        return {...state,users:payload}
    default:
        return state;
}}
export default userReducer