import {createslice} from "@reduxjs/toolkit";
import { userlist } from "./data";


const userslice = createslice ({
    
    name: "user",
    intialstate: userlist,
    reducers: {
        adduser: (state, action) => {
            state.push(action.payload)
        },
        updateuser: (state, action) => {
           const {id, name, email} = action.payload
           const uu = state.find(user => user.id == id);
           if (uu) {
            uu.name = name;
            uu.email = email;

           }
    }, 
    deleteuser: (state, action )=> {
        const {id} = action.payload
        const uu = state.find(user => user.id == id);
        if(uu) {
            return state.filter (f => f.id !==id);
        }


    }
}

})
export const {adduser, updateuser} = userslice.actions;
export default  userslice.reducer