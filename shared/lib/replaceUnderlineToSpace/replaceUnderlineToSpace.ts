export function replaceUnderlineToSpace<T>(data: T[], key: keyof T): T[] {
  if (!Array.isArray(data)) throw new Error('Is not array data');

  // @ts-ignore
  return data.map(
    (item) =>
      typeof item[key] === 'string' && {
        ...item,
        [key]: item[key].replace(/_/g, ' '),
      },
  );
}
