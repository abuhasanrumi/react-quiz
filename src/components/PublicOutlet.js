import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PublicOutlet() {
    const { currentUser } = useAuth();
    return !currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PublicOutlet