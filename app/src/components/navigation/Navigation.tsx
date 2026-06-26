import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { UserContext, UserDispatchContext } from '../../contexts/UserContext';
import { useContext } from 'react';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  const logInHandler = (loginEvent: React.MouseEvent) => {
    loginEvent.preventDefault();
    dispatch({
      type: 'log in',
      payload: {
        id: 1,
        firstName: 'Peter',
        lastName: 'Parker',
        email: 'webslinger@thedailybugle'
      }});
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<HomeIcon />}
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  );

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Routines
            </Typography>
            {
              user ? <Typography variant="h4">{user!.firstName} {user!.lastName}</Typography>
              :
              <Button onClick={logInHandler} color="inherit">Login</Button>
            }
        </Toolbar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </AppBar>
  );
}