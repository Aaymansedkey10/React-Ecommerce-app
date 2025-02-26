import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchUsers = createAsyncThunk('aboutSlice/fetchAbout', async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json()
    // console.log(data.users);
    return data.users
})


const aboutSlice = createSlice({
    name: 'aboutSliece',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // console.log(action.payload);
            return state = action.payload
        })       
    }
})

export default aboutSlice.reducer