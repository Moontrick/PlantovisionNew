/**
 * Токены для авторизации
 */
export type Tokens = {
  /**
   * Токен доступа
   */
  accessToken: string;
  /**
   * Токен для обновления
   */
  refreshToken: string;
};

/**
 * Временные Токены для смены почты
 */
export type TemporaryTokens = {
  /**
   * Временный токен
   */
  token: string;
  /**
   * Тип токена
   */
  tokenType: string;
};
