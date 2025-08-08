import { TextField} from "@mui/material";
import { useLoginPageContext } from "../context";
import { Controller, useFormContext} from "react-hook-form";

import ButtoAction from "../../../common/components/button/button";
import { sizeInput } from "@utils/inputSize";

const FormLogin = () => {
  const {state } = useLoginPageContext();
  const {isLoading} = state
  const {control}  = useFormContext();
  

  return (
    <div>
      <form method="POST" className="flex flex-col gap-4">
        
            <Controller
        control={control}
        name="email"
        render={({ field, fieldState}) => (
          <TextField 
          {...field}
          error={fieldState.isValidating}
          id="outlined-basic"
           {...sizeInput}
          label="email" 
          type="email"
          variant="outlined" 
          helperText={fieldState.invalid}
        />
        )}
        />
        
      
         <Controller
        control={control}
        name="password"
        render={({ field, fieldState}) => (
          <TextField
            {...field}
            {...sizeInput}
            error={fieldState.isValidating}
            id="outlined-password-input"
            label="Password"
            type="password"
           
            autoComplete="current-password"
            helperText={fieldState.invalid}
        />
        )}
        />

       
       
        
      <ButtoAction 
        label="submit"
        isLoading={isLoading}
        onClick={() => {console.log("error")}}
      />
      </form>
    </div>
  );
};

export default FormLogin;
