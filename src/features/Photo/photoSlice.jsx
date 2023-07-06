import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers:{
        addPhoto: (state, action) =>{
            state.push({
                id: uuidv4(),
                ...action.payload
            })
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload
            // console.log(removePhotoId)
            state = state.filter(photo => photo.id !== removePhotoId )
            return state
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload
            console.log(newPhoto)
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id)
            if(photoIndex >= 0){
                state[photoIndex] = newPhoto
            }
        } 
    }
})

const {reducer, actions} = photo
export const {addPhoto, removePhoto, updatePhoto} = actions
export default reducer

