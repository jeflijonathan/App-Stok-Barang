import FormLogin from "./formLogin";

const CardFormLogin = () => {
  return (
    <div className="p-5 bg-white rounded-2xl w-2/4 flex justify-center items-center shadow-lg">
      <h1>Login</h1>
      <p>Welcome, please enter your credentials to continue.</p>
      <FormLogin />
    </div>
  );
};
export default CardFormLogin;
