import { createContext, useContext, useState } from "react";
import type { LoginRequestModel } from "@api/users/model";

type StateType = {
  isLoading: boolean;
  loginreqDetails: LoginRequestModel;
};

const initialState: StateType = {
  isLoading: false,
  loginreqDetails: {} as LoginRequestModel,
};

type ContextType = {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

const LoginPageContext = createContext<ContextType | undefined>(undefined);

const useLoginPageContext = () => {
  const context = useContext(LoginPageContext);

  if (!context) {
    throw new Error(
      "useLoginPageContext must be used within a LoginPageContextProvider"
    );
  }

  return context;
};

const LoginPageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <LoginPageContext.Provider value={{ state, setState }}>
      {children}
    </LoginPageContext.Provider>
  );
};
export { useLoginPageContext, LoginPageContextProvider };
export type { StateType };
