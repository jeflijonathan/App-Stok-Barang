import { Children, createContext, useContext, useState } from "react";

type StateType = {
  isLoading: boolean;
};

const initialState: StateType = {
  isLoading: false,
};

type ContextType = {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const LoginPageContext = createContext<ContextType | undefined>(
  undefined
);

export const useLoginPageContext = () => {
  const context = useContext(LoginPageContext);

  if (!context) {
    throw new Error(
      "useLoginPageContext must be used within a LoginPageContextProvider"
    );
  }

  return context;
};

export const LoginPageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = useState<StateType | null>(null);

  return children;
};
