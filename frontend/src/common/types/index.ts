export type APIResponse<T = any> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
};

export type Callback<T> = {
  onSuccess: (data: T) => void;
  onError: (error: any) => void;
};
