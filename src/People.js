import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import API from './api';

export default class People extends Component {
    state = {
        people: []
    }

    api = new API();

    constructor() {
        super();
    }

    componentDidMount = async () => {
        const people = await this.api.listOfPeople();
        this.setState({ people });
    }

    render = () => {
        return (
            <div>
                <List>
                    {this.state.people && this.state.people.map((person) => {
                        return (
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                    <Typography component="span" color="textPrimary">
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );  
    }
}