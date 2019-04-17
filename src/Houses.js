import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import API from './api';
import House from './House';

export default class Houses extends Component {
    state = {
        emperors: []
    }

    api = new API();

    constructor() {
        super();
    }

    componentDidMount = async () => {
        this.setState({ houses: await this.api.houses() });
    }

    render = () => {
        return (
            <div>
                <List>
                    {this.state.houses && this.state.houses.map((house) => {
                        return (
                            <House house={house}></House>
                        );
                    })}
                </List>
            </div>
        );  
    }
}