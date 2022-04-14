import './Header.scss';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from '@mui/material';
import LogOutMenuItem from '../../LogOut/LogOutMenuItem';
import UserName from '../UserName/UserName/UserName';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRole } from '../../../../services/TokenService/getRole';

const Header = () => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
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
            {getRole(token) === 'Admin' &&
                <MenuItem onClick={() => {
                    handleMenuClose();
                    navigate('/Admin');
                }}>
                    Admin
                </MenuItem>
            }
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

                    {localStorage.getItem("jwtToken") ?
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
                        :
                        <div className='unauth_buttons'>
                            <Link color="inherit" underline="none" href="/Login">
                                <h3 className=' '>
                                    SignIn
                                </h3>
                            </Link>
                            <h3 className='header_separator'>|</h3>
                            <Link color="inherit" underline="none" href="/Registration">
                                <h3 className=' '>
                                    SignUp
                                </h3>
                            </Link>
                        </div>
                    }
                </div>
            </AppBar>
        </>
    );
}

export default Header;
