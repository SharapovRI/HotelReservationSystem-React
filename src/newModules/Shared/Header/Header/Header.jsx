import './Header.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from '@mui/material';
import LogOutMenuItem from '../../LogOut/LogOutMenuItem';
import UserName from '../UserName/UserName/UserName';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => {
                handleMenuClose();
                navigate('/MyOrders');
            }}>
                My orders
            </MenuItem> 
            <LogOutMenuItem handleMenuClose={handleMenuClose} />
        </Menu>
    );

    return (
        <>
            <AppBar position="static">
                <div className='header_toolbar'>
                    <Link color="inherit" underline="none" href="/">
                        <h3 className=' '>
                            HotelReservation
                        </h3>
                    </Link>

                    <div className='user_name_container'>
                        <UserName />

                        <IconButton
                            size="large"
                            edge="end"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        {renderMenu}
                    </div>

                </div>
            </AppBar>
        </>
    );
}

export default Header;
