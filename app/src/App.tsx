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
    <>
      { user ?
        <Grid container sx={{ padding: "10% 0", height: "100%", justifyContent: "center"}}>
          <Grid sx={{ height: "auto", minHeight: "66%" }} size={10}>
            <Outlet />
          </Grid>
        </Grid>
        :
        <Box sx={{ alignSelf: "center", height: "auto", width: "50%", backgroundColor: "white" }}>
          <Typography variant="h3">Please log in.</Typography>
        </Box>
      }
    </>
  );
}

export default App
