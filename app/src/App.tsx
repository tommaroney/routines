import { useReducer } from 'react';
import './App.css';
import { UserDispatchProvider, UserProvider, userReducer } from './contexts/UserContext';
import Navigation from './components/navigation/Navigation';
import { Outlet } from 'react-router';
import Typography from '@mui/material/Typography';

function App() {

  const [user, dispatch] = useReducer(userReducer, null);

  return (
    <UserProvider user={user}>
      <UserDispatchProvider dispatch={dispatch}>
        <Navigation />
        { user ? 
          <Outlet />
          :
          <Typography variant="h3">Please log in.</Typography>
        }
      </UserDispatchProvider>
    </UserProvider>
  );
}

export default App
