import { API } from "..";
import type { APIResponse, Callback } from "../../common/types";
import type { LoginRequestModel } from "./model";

export class UserService {
  private api = new API();
  private basePathLogin = "/login";
  async fetchUsers() {}

  async Login(
    data: LoginRequestModel[],
    callback: Callback<LoginRequestModel[]>
  ) {
    const res: APIResponse<LoginRequestModel[]> = await this.api.POST(
      this.basePathLogin,
      data
    );

    if (!res.status) {
      callback.onError(res.message || "unkown error.");
    } else {
      callback.onSuccess(res.data);
    }
  }
  async createUser() {}
}
