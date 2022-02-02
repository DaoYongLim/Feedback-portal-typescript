import { useContext, createContext } from "react";

interface IContext {
  isAuthenticated: boolean;
  userHasAuthenticated: Function | null;
}

export const AppContext = createContext<IContext>({
  isAuthenticated: false,
  userHasAuthenticated: null,
});

export function useAppContext() {
  return useContext(AppContext);
}
