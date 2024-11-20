import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function MobileNavLinks() {
    const { isAuthenticated, logout } = useAuth0();
  return (
    <>
        {isAuthenticated ? (
            <div className="flex flex-col w-full gap-4">
                <Link to="/user-profile" className=" font-bold hover:text-orange-500">
                    User Profile
                </Link>
                <Button 
                    onClick={() => logout()} 
                    className='flex items-center font-bold'
                >
                        Log Out
                </Button>
            </div>
            
        ) : (
            <Link to="/login" className="text-orange-500 hover:text-orange-600" > Login </Link>
        )}
    </>
  )
}

export default MobileNavLinks