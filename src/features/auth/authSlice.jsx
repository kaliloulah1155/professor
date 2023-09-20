import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    isLoading: false,
    isError: false,
    user: [],
    token: null
}

//Login user

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectedWithValue }) => {
       // const { email, password } = credentials
        try {
             const res = await axios.post(`/login`, credentials);
            localStorage.setItem("prof_token", res.data.prof_token);
            return res.data;
        }catch (err) {
            return rejectedWithValue(err.message);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        //loginUser
        builder.addCase(loginUser.pending, (state, action) => {
            return { 
                   ...state,
                   isLoading: true ,
                   token: null,
                }
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {  
            if (action.payload) {
                return {
                    ...state,
                    token: action.payload.prof_token,
                    user: [...state.user, action.payload.user] ,
                    isLoading:false,
                    isError: false
                }
            }  
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                isLoading: false,
                token:null,
                isError: true
            }
        });
    }
});

export default authSlice.reducer