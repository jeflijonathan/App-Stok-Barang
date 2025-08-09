import { TextField } from "@mui/material";
import { useLoginPageContext } from "../context";
import { Controller, useFormContext } from "react-hook-form";

import ButtoAction from "@components/button/button";
import { sizeInput } from "@utils/inputSize";
import useLogin from "../hook/useLogin";

const FormLogin = () => {
  const { state } = useLoginPageContext();
  const { isLoading } = state;
  const { control } = useFormContext();
  const { handleLogin } = useLogin();
  return (
    <div>
      <form method="POST" className="flex flex-col gap-4">
        <Controller
          defaultValue={""}
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="outlined-email"
              label="Email"
              type="email"
              variant="outlined"
              {...sizeInput}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          defaultValue={""}
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="outlined-password"
              label="Password"
              type="password"
              variant="outlined"
              {...sizeInput}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <ButtoAction
          label="submit"
          isLoading={isLoading}
          onClick={handleLogin}
        />
      </form>
    </div>
  );
};

export default FormLogin;
