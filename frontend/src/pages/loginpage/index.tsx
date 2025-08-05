import { LoginPageContextProvider } from "./context";
import LoginBody from "./partials/LoginBody";

const LoginPage = () => {
  return (
    <LoginPageContextProvider>
      <LoginBody />
    </LoginPageContextProvider>
  );
};
export default LoginPage;
