import { Navigate, Outlet } from "react-router"
import { useAuth } from "../AuthContext"
import { Commet } from "react-loading-indicators"
import { useEffect } from "react"


const PrivateRoute: React.FC = () => {
    const { user, loading, logoutUser } = useAuth()

  useEffect(() => {
    if (user && user.exp * 1000 < Date.now()) {
      logoutUser();
    }
  }, [user, logoutUser]); // Depend on user and logoutUser

  if(loading) {
    return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
  }

  if(!user) {
    return <Navigate to={'/home/login'}/>
  }


    return (
        <Outlet />
    )
}

export default PrivateRoute