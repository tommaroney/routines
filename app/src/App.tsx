import { useContext } from 'react';
import './App.css';
import { UserContext } from './contexts/UserContext';
import { Outlet } from 'react-router';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {

  const user = useContext(UserContext);

  return (
    <Grid container sx={{ padding: "10% 0", height: "100%", justifyContent: "center"}}>
      { user ?
        <Grid sx={{ height: "auto", minHeight: "66%" }} size={10}>
            <Outlet />
        </Grid>
        :
        <Box sx={{ height: "auto", width: "50%", backgroundColor: "white" }}>
          <Typography variant="h3">Please log in.</Typography>
        </Box>
      }
    </Grid>
  );
}

export default App
