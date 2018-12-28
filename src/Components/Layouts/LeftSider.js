import React from 'react';


import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Drawer from '@material-ui/core/Drawer';


const leftSiderStyles = ({
    'paper':{
        width : 240,
    },
    'paper:before':{
        bottom: 0
    }

});

class LeftSider extends React.Component{

    render(){
        return (
            <Drawer style={leftSiderStyles.paper} variant="permanent">
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText  inset primary="Sent mail" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Drafts" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                    </MenuItem>
                </MenuList>
            </Drawer>
        );
    }
}


export default LeftSider;