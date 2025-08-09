import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const VerificationForm = () => {
  const { control } = useFormContext();
  return (
    <form onSubmit={() => {}}>
      <Controller
        defaultValue=""
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="outlined-email"
            label="email"
            type="email"
            variant="outlined"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
    </form>
  );
};
export default VerificationForm;
