import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications" 
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { useHistory } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">

                <div className="header__left">
                    <img src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-563cf163-2aac-41ac-be0c-7a010a141f38-UqPnD.png" alt=""/>

                    <div className="header__search">
                       <SearchIcon />
                        <input placeholder="Search" type="text" />
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home" onClick={() => history.push("./home")} />
                    <HeaderOption Icon={SupervisorAccountIcon} title="Friends" />
                    <HeaderOption Icon={GroupAddIcon} title="Groups" />
                   <HeaderOption Icon={ChatIcon} title="Messaging" />
                   <HeaderOption Icon={EventNoteIcon} title="News" onClick={() => history.push("./news")} /> 
                   <HeaderOption Icon={ExitToAppIcon} title='Logout' onClick={logoutOfApp} />
                </div>
           
        </div>
    );
}

export default Header
