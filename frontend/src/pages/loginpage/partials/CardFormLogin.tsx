import { FormProvider } from "react-hook-form";
import FormLogin from "./FormLogin";
import useLoginForm from "../hook/useLoginForm";
import bg from "@assets/image/bg.png";
import vector from "@assets/image/vector.png";
import { Link } from "react-router-dom";
import AppearZoomIn from "@components/animations/AppearZoomIn";
const CardFormLogin = () => {
  const { loginReqForm } = useLoginForm();

  return (
    <div className=" bg-white rounded-2xl w-2/3 shadow-lg flex lg:flex-row flex-col-reverse lg:h-[80vh] h-full">
      <div className="w-full h-full p-5  flex flex-col justify-center ">
        <h1 className="font-bold text-2xl mb-1 uppercase">Login</h1>
        <p className="mt-1 mb-4 text-sm">
          Welcome, please enter your credentials to continue.
        </p>
        <FormProvider {...loginReqForm}>
          <FormLogin />
        </FormProvider>
        <Link to={"/reset-password"} className="mt-4 mb-3">
          Forgate password?
        </Link>
      </div>
      <div
        className={`bg-cover bg-center w-full flex flex-col justify-center items-center rounded-tr-2xl rounded-br-xs lg:p-8 p-10 md:p-20`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <AppearZoomIn duration={0.6}>
          <img src={vector} alt="" className="md:w-[70%] lg:w-full w-full" />
        </AppearZoomIn>
      </div>
    </div>
  );
};
export default CardFormLogin;
