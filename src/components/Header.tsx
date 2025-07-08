import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" fontWeight="bold">
            ✅ Taskify
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;