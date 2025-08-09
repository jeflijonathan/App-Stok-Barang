import ResetPasswordPageContextProvider from "./context";
import ResetPasswordFormBody from "./partials/ResetPasswordFormBody";

const ResetPasswordPage = () => {
  return (
    <ResetPasswordPageContextProvider>
      <ResetPasswordFormBody />
    </ResetPasswordPageContextProvider>
  );
};
export default ResetPasswordPage;
