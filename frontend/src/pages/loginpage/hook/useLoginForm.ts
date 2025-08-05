import type { LoginRequestModel } from "../../../api/users/model";
import { useForm } from "react-hook-form";
import type { Resolver, UseFormReturn } from "react-hook-form";
import { useLoginPageContext } from "../context";
import {
  LoginDetailsFormatter,
  LoginreqDefaultValues,
  LoginValidations,
} from "../utils/form";

type HookReturn = {
  loginReqForm: UseFormReturn<LoginRequestModel>;
};

const useLoginForm = (): HookReturn => {
  const { state } = useLoginPageContext();

  const loginReqForm = useForm<LoginRequestModel>({
    defaultValues: LoginreqDefaultValues,
    values: LoginDetailsFormatter(state.loginreqDetails),
    resolver: LoginValidations as Resolver<LoginRequestModel>,
  });

  return {
    loginReqForm,
  };
};

export default useLoginForm;
