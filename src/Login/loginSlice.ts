import { createSlice } from "@reduxjs/toolkit";

export interface UserDetailT{
    userName:any,
    //type:string,
    isLoggedIn:boolean,
    isAuthFailed:boolean
}
export const loginTypeInit : UserDetailT ={
    userName:'',
    //type:'',
    isLoggedIn:false,
    isAuthFailed:false
}
const loginSlice = createSlice({
    name:"login",
    initialState:loginTypeInit,
    reducers:{
        loggedIn(state,action) {
            //console.log('inside log in reducer')
            return {...action.payload}
        },
        loggedOut(state,action) {
            //console.log('inside log out reducer')
            return {...state,isLoggedIn:!action.payload}
        },
    }
})
export default loginSlice.reducer;
export const {loggedIn,loggedOut}=loginSlice.actions;
