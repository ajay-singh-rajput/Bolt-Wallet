import React  from "react";
import { useAppSelector } from "../store/store";
import Auth from "../auth/Auth";
import VerifyPasscode from "../auth/VerifyPasscode";

// Define the type for the component prop
// interface WithAuthProps {
//   Component: React.FC;
// }

// Higher-Order Component that requires a component as input
const withAuth = (WrappedComponent: React.FC) => {
  const WithAuthComponent: React.FC = (props) => {
    const {passCodeHash, isAuth} = useAppSelector(state => state.AuthSlice);

    if (!passCodeHash) {
        return <Auth/>
     
    } else {
      if (!isAuth) {
        return <VerifyPasscode/>
      } else if (isAuth && passCodeHash) {
        return <WrappedComponent {...props} />;
      }
    }


  };

  return WithAuthComponent;
};

export default withAuth;
