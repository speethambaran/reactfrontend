import * as React from 'react';
import { Typography, IconButton, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";


export default function MenuListComposition() {
    const [open, setOpen] = React.useState(false);
    const [username,setUsername] = React.useState('')
    const anchorRef = React.useRef(null);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const logoutUser = () => {
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("userData")
        navigate("/");
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const getProfile = ()=>{
        navigate('/profile')
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        let userInfo = JSON.parse(localStorage.getItem("userData"));
        if (userInfo) {
            setUsername(userInfo.username)
        }
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
        
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >

                    <IconButton>
                        <PersonOutlinedIcon />
                        <Typography
                            varient="h1"
                            color={colors.greenAccent[600]}
                            fontWeight="bold"
                        >
                            {username}
                        </Typography>


                    </IconButton>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        
                                    >
                                        <MenuItem onClick={getProfile}>Profile</MenuItem>
                                        <MenuItem onClick={logoutUser}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
