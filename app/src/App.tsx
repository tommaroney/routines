import { useContext } from 'react';
import './App.css';
import { UserContext } from './contexts/UserContext';
import { Outlet } from 'react-router';
import Typography from '@mui/material/Typography';

function App() {

  const user = useContext(UserContext);

  return (
    <>
      { user ?
        <Outlet />
        :
        <Typography variant="h3">Please log in.</Typography>
      }
    </>
  );
}

export default App
