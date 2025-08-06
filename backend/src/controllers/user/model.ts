export type Role = {
  id: number;
  name: string;
  createAt: Date;
  updateAt: Date;
};

export type UserModel = {
  id: string;
  username: string;
  email: string;
  password: string;
  roleId: number;
  role?: Role;
  createdAt: Date;
  updatedAt: Date;
};

export type UserLoginModel = {
  email: string;
  password: string;
};
