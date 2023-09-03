import {createSlice} from '@reduxjs/toolkit';

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:'VAL_OF_SET_CURRENT_USER',
}

export const userReducer = createSlice({
    
})

export const userReducerOld = (state = INITIAL_STATE,action)=>{
    const {type,payload} = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: //if the action type is 
            return {...state,currentUser:payload};
        default:
            return state;
    }
}