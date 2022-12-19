import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  Link,
  Box
} from"@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "../Wrappers";
import Notification from "../Notification/Notification";
import UserAvatar from "../UserAvatar/UserAvatar";
import { ReactComponent as MsgIcon } from "../../images/Icons/messageIcon.svg";
import { ReactComponent as ProfileIcon } from "../../images/Icons/profileIcon.svg";
import { ReactComponent as WalletIcon } from "../../images/Icons/walletIcon.svg";
import { ReactComponent as NotificationIcon } from "../../images/Icons/notificationIcon.svg";
import { ReactComponent as LogoutIcon } from "../../images/Icons/logoutIcon.svg";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";


const pages = ['Onboarding', 'Deposit', 'Withdraw', 'Adjust Margin'];

export default function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar} disableGutters>

     

      <img className={classes.logo} src="https://www.density.exchange/static/media/logo.291041089f7739e4e1658baf3cf4bf23.svg"/>
      {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} className={classes.menuItem}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}   
            
        
        <div className={classes.grow} />
        
        
        
        
       
          
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <MsgIcon className={classes.headerMenuIcon}/>  
        </IconButton>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
        
           <WalletIcon className={classes.headerMenuIcon}/>
        
        </IconButton>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
        
           <ProfileIcon className={classes.headerMenuIcon}/>
        
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <NotificationIcon className={classes.headerMenuIcon}/>
          
        </IconButton>

        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <LogoutIcon />
          
        </IconButton>
       
        
      </Toolbar>
    </AppBar>
  );
}
