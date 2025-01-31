
import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from "react";
interface State {
  isNavOpen: boolean;
}
interface Action {
  type: string;
  payload?: string;
}
type Dispatch = (action: Action) => void;
interface AppProviderProps {
  children: ReactNode;
}
const initialState = { isNavOpen: false };
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispathContext = createContext<Dispatch | undefined>(undefined);
const DashboardReducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "SHOW_NAV":
      return { ...state, isNavOpen: true };
    case "HIDE_NAV":
        return { ...state, isNavOpen: false };
    default:
      return state;
  }
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    DashboardReducer,
    initialState
  );
  return (
    <AppStateContext.Provider value={state}>
      <AppDispathContext.Provider value={dispatch}>
        {children}
      </AppDispathContext.Provider>
    </AppStateContext.Provider>
  );  
};
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error("useAppState must be used within a AppProvider");
  return context;
};
export const useAppDispatch = () => {
  const context = useContext(AppDispathContext);
  if (!context)
    throw new Error("useAppDispatch must be used within a AppProvider");
  return context;
};
