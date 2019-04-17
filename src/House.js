import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Emperor from './Emperor';

export default class House extends Component {
    state = {
        open: false
    }

    constructor() {
        super();
    }

    toggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render = () => {
        const { house } = this.props;
        return (
            <div key={house.name}>
                <ListItem alignItems="flex-start" onClick={this.toggle}>
                    <ListItemText primary={house.name} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    {
                        house.members.map((emperor) => {
                            emperor.house = house;
                            return (<Emperor emperor={emperor}></Emperor>);
                        })
                    }
                </Collapse>
            </div>
        );
    }
}