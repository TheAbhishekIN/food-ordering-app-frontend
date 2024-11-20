import { CircleUserRound } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

function UsernameMenu() {
    const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center gap-2 font-bold hover:text-orange-500'>
            <CircleUserRound  className='text-orange-500'/> 
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent >
            <Link
                to="/user-profile"
                className="font-bold hover:text-orange-500">
                    User Profile
                </Link>
                <Separator />
                <Button onClick={() => logout()} className='flext flex-1 font-bold bg-orange-500'>Log Out</Button>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu