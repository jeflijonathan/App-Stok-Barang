type HookReturn = {
  sendEmail: () => void;
  handleResetPassword: () => void;
};

const ResetPassword = (): HookReturn => {
  const sendEmail = () => {};
  const handleResetPassword = () => {};
  return { sendEmail, handleResetPassword };
};

export default ResetPassword;
