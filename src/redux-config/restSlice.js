import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'rest',
    initialState:{
        currentUser: null
       // _id: null
        
    },
    reducers:{
        setUser: (state,action)=>{
            state.currentUser = action.payload;
           // state.id = action.payload._id;
        },
        signOut: (state)=>{
            state.currentUser = null;
          //  state._id = null;
        }
    }
});

export const {setUser,signOut} = slice.actions;
export default slice.reducer;
//export const selectId = state => state.rest.id;

