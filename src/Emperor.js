import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default class Emperor extends Component {
    constructor() {
        super();
    }


    render = () => {
        const { emperor } = this.props;

        return (
            <ListItem alignItems="flex-start" key={emperor.name}>
                <ListItemAvatar>
                    <Avatar alt={emperor.name} src={emperor.imageUrl} />
                </ListItemAvatar>
                <ListItemText primary={emperor.name}
                secondary={
                    <React.Fragment>
                        <Typography component="span" color="textPrimary">
                            {emperor.house.name}
                        </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
        );  
    }
}