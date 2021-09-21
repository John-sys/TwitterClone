import React from 'react';
import './Sidebar.css';
import { BookmarkBorder, ListAlt, MailOutlined, MoreHoriz, PermIdentity, Twitter } from '@material-ui/icons';
import { Home } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import SidebarOption from './SidebarOptions';
import { NotificationsNone } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon here */}
            <Twitter className="sidebar__twitterIcon"/>
            {/* Twitter icon Here */}

            <SidebarOption active Icon={Home} text="Home"/>
            <SidebarOption Icon={Search} text="Explore"/>
            <SidebarOption Icon={NotificationsNone} text="Noifications"/>
            <SidebarOption Icon={MailOutlined} text="Messages"/>
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
            <SidebarOption Icon={ListAlt} text="Lists"/>
            <SidebarOption Icon={PermIdentity} text="Profile"/>
            <SidebarOption Icon={MoreHoriz} text="More"/>


            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>Send</Button> */}
        </div>
    )
}

export default Sidebar;