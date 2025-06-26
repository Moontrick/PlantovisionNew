import { Dictionary } from './types';
import { MASKS_CONVERT } from '@/shared/config/masks';

export function toCamelOrSnakeCase<T>(
  dictionary: Dictionary | Dictionary[],
  isCamelCase: boolean,
): T {
  if (Array.isArray(dictionary)) {
    return dictionary.map((item) =>
      toCamelOrSnakeCase<T>(item, isCamelCase),
    ) as T;
  }

  const newDictionary: Dictionary = {};

  Object.keys(dictionary).forEach((key) => {
    const newKey = isCamelCase
      ? key.replace(
          MASKS_CONVERT.HyphensAndUnderscoresWithSmallLetters,
          ($1) => {
            return $1.toUpperCase().replace('-', '').replace('_', '');
          },
        )
      : key.replace(MASKS_CONVERT.Uppercase, '_$1').toLowerCase();

    if (typeof dictionary[key] === 'object' && dictionary[key] !== null) {
      newDictionary[newKey] = toCamelOrSnakeCase(dictionary[key], isCamelCase);
    } else {
      newDictionary[newKey] = dictionary[key];
    }
  });

  return newDictionary as T;
}
