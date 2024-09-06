import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    isLoding: true,
    search: '',
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers () {},
})