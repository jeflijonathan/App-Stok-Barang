import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  AxiosError,
  isAxiosError,
} from "axios";
import LocalStorage from "../common/utils/localStorage";
import type { APIResponse } from "../common/types";

type Headers = {
  "Content-type": string;
};

export class API {
  private api: AxiosInstance;
  private headers: Headers;
  private accessToken: string;

  constructor() {
    this.headers = {
      "Content-type": "application/json",
    };

    this.api = axios.create({
      baseURL: `${import.meta.env.BACKEND_URL}/api`,
      httpsAgent: false,
    } as AxiosRequestConfig);

    this.accessToken = LocalStorage().getItem<string>("accessToken") || "";
  }

  async GET<T, U = T>(path: string): Promise<APIResponse<U>> {
    try {
      const headers = {
        ...this.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };

      const res = await this.api.get(path, { headers: headers });

      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          statusCode: err.status,
          message: err.message,
          data: [],
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error.",
          data: [],
        } as APIResponse<U>;
      }
    }
  }

  async POST<T, U = T>(path: string, data: any): Promise<APIResponse<U>> {
    try {
      const headers = {
        ...this.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };

      const res = await this.api.post(path, data, { headers: headers });
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          statusCode: err?.response?.data?.status_code,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
        } as APIResponse<U>;
      }
    }
  }

  async POSTBLOB<T, U = T>(path: string, data: any): Promise<APIResponse<U>> {
    try {
      const headers = {
        ...this.headers,
        Authorization: `Bearer ${this.accessToken}`,
        Accept: "application/pdf",
      };

      const res = await this.api.post(path, data, { headers: headers });

      return {
        status: true,
        statusCode: 200,
        message: "Success Download.",
        data: res.data,
      };
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          status_code: err?.response?.data?.status_code,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
        } as APIResponse<U>;
      }
    }
  }

  async POSTFORM<T, U = T>(path: string, data: any): Promise<APIResponse<U>> {
    try {
      const headers: Headers = {
        "Content-type": "multipart/form-data",
      };

      const res = await this.api.post(path, data, { headers });

      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          status_code: err?.response?.data?.status_code,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
        } as APIResponse<U>;
      }
    }
  }

  async PUT<T, U = T>(path: string, data: any): Promise<APIResponse<U>> {
    try {
      const headers = {
        ...this.headers,
        Authorization: `Bearer ${this.accessToken}`,
      };

      const res = await this.api.put(path, data, { headers: headers });
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          statusCode: err?.response?.data?.status_code,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
        } as APIResponse<U>;
      }
    }
  }

  async DELETE<T, U = T>(path: string): Promise<APIResponse<U>> {
    try {
      const headers = {
        Authorization: `Bearer ${this.accessToken}`,
      };
      const res = await this.api.delete(path, { headers: headers });
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          statusCode: err?.response?.data?.status_code,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
        } as APIResponse<U>;
      }
    }
  }
}
