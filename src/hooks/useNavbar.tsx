import { useAppDispatch } from "../context/AppContext";

const useNavbar = () => {
  const dispatch = useAppDispatch();
  
  const handleNavbar = (actionType: string) => {
    dispatch({ type: actionType });

    return { actionType };
  };
  return handleNavbar;
};

export default useNavbar;
