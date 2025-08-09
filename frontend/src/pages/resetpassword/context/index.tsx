import React, { useContext, createContext, useState } from "react";

type StateType = {
  isLoading: boolean;
};

const initialState: StateType = {
  isLoading: true,
};

type ContextType = {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const ResetPasswordContext = createContext<ContextType | undefined>(
  undefined
);

const useResetPasswordPageContext = () => {
  const context = useContext(ResetPasswordContext);

  if (!context) {
    throw new Error(
      "userResetPasswordPageContext must be used within a ResetPasswordContextProvider"
    );
  }

  return context;
};

const ResetPasswordPageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <ResetPasswordContext.Provider value={{ state, setState }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};
export { useResetPasswordPageContext };
export default ResetPasswordPageContextProvider;
