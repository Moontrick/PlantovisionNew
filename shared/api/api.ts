import axios from 'axios';

/**
 * Базовый сервис авторизации
 */
export const baseService = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_BACK_PROD,
});


// /**
//  * Флаг, чтобы предотвратить зацикливание logout
//  */
// let isLoggingOut = false;

// /**
//  * Метод для выхода из аккаунта
//  */
// async function logout() {
//   if (isLoggingOut) return; // Если уже выполняется, не вызываем повторно
//   isLoggingOut = true;

//   try {
//     await authService.post(RoutesAuth.Logout);
//   } catch (error) {
//     alertHandler.addAlert({ alert: error });
//   } finally {
//     isLoggingOut = false; // Сбрасываем флаг после завершения
//     window.location.href = navigation.getAuthPath();
//   }
// }

// /**
//  * Перехватчик запросов на 401 ошибку
//  */
// authService.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       if (error.config?.url === RoutesAuth.Logout) {
//         return Promise.reject(error);
//       }
//       logout();
//     }
//     return Promise.reject(error);
//   }
// );

// /**
//  * Основная функция для fetch обработкой 401 ошибок
//  */
// export async function fetchService(
//   url: string,
//   options: RequestInit = {},
// ) {
//   const headers = new Headers(options?.headers);
//   headers.set('Content-Type', 'application/json');

//   // Получаем динамический BASE_URL
//   const BASE_URL =
//     typeof window !== "undefined"
//       ? window.RUNTIME_CONFIG.NEXT_PUBLIC_BACK || process.env.NEXT_PUBLIC_BACK
//       : "";

//   try {
//     const response = await fetch(`${BASE_URL}${url}`, {
//       ...options,
//       headers,
//       credentials: 'include',
//     });

//     if (response.status === 401) {
//       await logout();
//     }

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw errorData.message;
//     }

//     return await response;
//   } catch (error) {
//     alertHandler.addAlert({ alert: error });
//     throw error;
//   }
// }
