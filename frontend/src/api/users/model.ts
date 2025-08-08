export type LoginRequestModel = {
  email: string;
  password: string;
};

export type LoginResponseModel = {
  id: string;
  username: string;
  email: string;
  token: string;
  refreshToken: string
}

export type ResetPasswordRequestModel = {
  email: string;
}

export type UsersModel = {
  
}