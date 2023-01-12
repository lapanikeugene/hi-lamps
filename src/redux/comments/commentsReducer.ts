import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "./commentsActions";
import initState from "./commentsInitialstate";
import { commentItemInterface } from "./commentsInterface";


export const commentsSlice = createSlice({
    name:"comments slice",
    initialState: initState,
    reducers:{
        updateRating: (state,action) =>{
            state.userRating = action.payload;
            console.log("ratings > user rating",state.userRating," recieved rating >",action.payload);
        }
    },
    extraReducers:{
        [getComments.fulfilled.type]: (state,action) =>{
           // console.log("got comments >",action.payload);
            const data:commentItemInterface[] = [];
            const len = action.payload.data.data.length;
            const dataExtract = action.payload.data.data
            for( let i = 0; i < len ; i ++ )
            {
                data.push({
                    rating: dataExtract[i].attributes.rating,
                    desc:   dataExtract[i].attributes.reviewtext,
                    name:   dataExtract[i].attributes.name,
                    img:    dataExtract[i].attributes.image.data?.attributes?.url,
                    date:   dataExtract[i].attributes.date,
                })
            }
          console.log("comments:",data);

            state.comments = data;
        }
    }
})


export const {updateRating} = commentsSlice.actions;
export default commentsSlice.reducer;