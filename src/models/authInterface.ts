export interface IAuth {
  uuid: string;
  id: string;
  password: string;
  name: string;
}

export interface IAuthLogin extends Pick<IAuth, 'id' | 'password'> {}

export interface IAuthSignUp extends Omit<IAuth, 'uuid'> {}

export interface IAuthUser extends Pick<IAuth, 'uuid'> {}
