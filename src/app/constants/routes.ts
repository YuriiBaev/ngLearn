export const AUTH = 'auth';
export const LOGIN = 'login';
export const LOGIN_ROUTE = `${AUTH}/${LOGIN}`;
export const REGISTRATION = 'registration';
export const REGISTRATION_ROUTE = `${AUTH}/${REGISTRATION}`;

export const ADD_POST = 'add-post';
export const PROFILE = 'profile';
export const EDIT_PROFILE = 'profile-edit';
export const MY_POSTS = 'my-posts';
export const DETAILS = 'details/:id';
export const EDIT_POST = 'edit-post/:id';


export const getLink = (route: string): string => (`/${route}`);
