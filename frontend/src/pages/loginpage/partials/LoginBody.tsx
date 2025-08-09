import AppearZoomIn from "@components/animations/AppearZoomIn";
import CardFormLogin from "./CardFormLogin";

const LoginBody = () => {
  return (
    <AppearZoomIn>
      <div className="flex justify-center items-center">
        <CardFormLogin />
      </div>
    </AppearZoomIn>
  );
};
export default LoginBody;
