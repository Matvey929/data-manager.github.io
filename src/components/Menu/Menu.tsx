import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

import React, { FC, useState } from "react";
import { Link } from "react-router";
 
import './menu.css'

export const MenuComponents:FC = ()=> {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
           <Link to='/'>
            Home
           </Link>
           <Link to='/content'>
            Content
           </Link>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
           <Link to='/profile'>
            <Avatar /> Profile
           </Link>
          </MenuItem>
       <MenuItem onClick={handleClose}>
          <Link to='/user'>
            <Avatar />  User        
          </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Link to='/setting'>
            <Avatar /> Setting
           </Link>
          </MenuItem>
        </Menu>
      </>
    );
  
} 