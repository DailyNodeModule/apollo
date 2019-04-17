import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Emperor from './Emperor';
import API from './api';

export default class Emperors extends Component {
    state = {
        emperors: []
    }

    api = new API();

    constructor() {
        super();
    }

    componentDidMount = async () => {
        this.setState({ emperors: await this.api.emperors() });
    }

    render = () => {
        return (
            <div>
                <List>
                    {this.state.emperors && this.state.emperors.map((emperor) => {
                        return (
                            <Emperor emperor={emperor}></Emperor>
                        );
                    })}
                </List>
            </div>
        );  
    }
}