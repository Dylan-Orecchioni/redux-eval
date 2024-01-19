import { configureStore } from '@reduxjs/toolkit'
import appSlice from './App/AppSlice'

export const store = configureStore({
    reducer: {
        app: appSlice
    }
})