import { Action, ThunkAction } from "@reduxjs/toolkit";
import { setIsAuth } from ".";
import { userService } from "../../service/UserService";
import { AppState } from "../../store";

export function getTest(): ThunkAction<any, AppState, undefined, Action<string>> {
    return async (dispatch) => {
        try {
            const data = await userService.getTest()
            dispatch(setIsAuth(data))
            console.log(data)
        } catch (error) {
            console.log('Произошла ошибка', error)
        }finally {
            console.log('Запрос завершился')
        }
    };
}
