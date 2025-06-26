export const ROUTES = {
  main: '/',
  home: '/home',
  signIn: '/signIn',
  sightUp: '/signUp',
  auth: '/auth',
  recovery: '/recovery',
  default: '',
  createPassword: '/create-password',

  // Dashboard
  controlDocuments: '/controlDocuments',
  controlCompany: '/controlCompany',
  controlUsers: '/controlUsers',
  search: '/search',
  personalAccount: '/personalAccount',
};

export const AUTH_PATH = [ROUTES.auth];

export const NOT_ACCESS_PATH = [
  ROUTES.auth,
  ROUTES.sightUp,
  ROUTES.recovery,
  ROUTES.default,
  ROUTES.createPassword,
];
