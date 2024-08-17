import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface InitialStateTypes{
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isDarkMode: false,
    isSidebarCollapsed: false
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const {setIsDarkMode, setIsSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer;