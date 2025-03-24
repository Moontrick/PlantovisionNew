

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppState } from '../../store';
import { initialState } from './initState';


//**********************Создание слайсера********************************************************/
export const slice = createSlice({
    name: 'userStore',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
});
//**************************************************************************************************/ 

//**********************Создание селектора********************************************************/
export const userAuthSelector = (state: AppState) => state.userStore.isAuth;
//**************************************************************************************************/ 