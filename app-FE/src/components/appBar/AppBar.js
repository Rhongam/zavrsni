import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../sideMenu/SideMenu';

const BasicAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
                <Toolbar>
                    <TemporaryDrawer
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </TemporaryDrawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: '1vh' }}>
                        Air Quality Control
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BasicAppBar;