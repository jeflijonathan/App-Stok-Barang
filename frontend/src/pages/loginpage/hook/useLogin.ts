import { useFormContext } from "react-hook-form";
import { UserService } from "../../../api/users/service";
import type { LoginRequestModel } from "../../../api/users/model";
import LocalStorage from "@utils/localStorage";

type HookReturn = {
  handleLogin: () => void;
};

const useLogin = (): HookReturn => {
  const { handleSubmit } = useFormContext();
  const { setItem } = LocalStorage();

  const handleLogin = () => {
    return handleSubmit(async (value) => {
      const service = new UserService();

      const data: LoginRequestModel = {
        email: value?.email,
        password: value?.password,
      };

      await service.Login(data, {
        onSuccess: (data) => {
          setItem("username", data[0].username);
          setItem("email", data[0].email);
          setItem("accessToken", data[0].token);
          setItem("refreshToken", data[0].refreshToken);
        },
        onError: (err) => {
          console.log(err);
        },
      });
    })();
  };

  return { handleLogin };
};
export default useLogin;
