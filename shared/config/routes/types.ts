import { ReactElement } from 'react';

export enum RoutePaths {
  root = '/',
  audit = '/audit',
  calendar = '/calendar',
  docs = '/docs',
  messages = '/messages',
  noMatch = '*',
}

export interface Route {
  element: ReactElement;
  path?: RoutePaths;
  index?: boolean;
}
