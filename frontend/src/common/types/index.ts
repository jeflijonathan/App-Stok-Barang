export type Pagination = () => {

};
export type APIResponse<T = any> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
  pagination: {

  }
};


export type Callback<T> = {
  onSuccess: (data: T) => void;
  onError: (error: any) => void;
};
