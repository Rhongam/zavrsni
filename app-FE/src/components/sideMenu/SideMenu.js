import React, { useState, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Divider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false
  });
  let navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className='menu-subheader'>
            Air Quality Control
          </ListSubheader>
        }
      >
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/map")}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/locations")} >
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Locations" />
        </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/locations/karepovac")}>
            <ListItemText primary={'Karepovac'} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/locations/marjan")}>
            <ListItemText primary={'Marjan'} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/locations/poljud")}>
            <ListItemText primary={'Poljud'} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/locations/vranjic")}>
            <ListItemText primary={'Vranjic'} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/locations/znjan")}>
            <ListItemText primary={'Znjan'} />
          </ListItemButton>
        </List>
        <ListItemButton onClick={() => navigate("/about")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Divider />
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;