//**********************Начальное состояние********************************************************/
interface userStoreInterface {
    isAuth: boolean;
}

export const initialState: userStoreInterface = {
    isAuth: true,
};
//**************************************************************************************************/ 