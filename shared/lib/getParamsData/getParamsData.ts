/**
 * Метод для получения параметров в шаблонах layout.tsx или page.tsx.
 * @param params - любые приходящие параметры.
 * @returns - переданные параметры
 */
export async function getParamsData<T>(params: Promise<T>): Promise<T> {
  try {
    const result = await params;
    return result;
  } catch (error) {
    throw new Error('Invalid params');
  }
}
