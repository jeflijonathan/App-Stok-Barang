import { FormProvider } from "react-hook-form";
import FormLogin from "./FormLogin";
import useLoginForm from "../hook/useLoginForm";

const CardFormLogin = () => {
  const { loginReqForm } = useLoginForm();

  return (
    <div className="p-5 bg-white rounded-2xl w-2/4 flex flex-col justify-center items-center shadow-lg">
      <h1 className="text-bold">Login</h1>
      <p>Welcome, please enter your credentials to continue.</p>
      <FormProvider {...loginReqForm}>
        <FormLogin />
      </FormProvider>
    </div>
  );
};
export default CardFormLogin;
