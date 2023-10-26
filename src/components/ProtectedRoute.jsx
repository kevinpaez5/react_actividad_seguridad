import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  console.log("IsAuthenticated:", isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
