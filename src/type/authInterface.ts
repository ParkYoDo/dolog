export interface IAuth {
  id: string;
  password: string;
  name: string;
}

export interface IAuthLogin extends Pick<IAuth, 'id' | 'password'> {}

export interface IAuthSignUp extends IAuth {}
