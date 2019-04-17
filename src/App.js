import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import logo from './logo.svg';
import  NavBar from './NavBar';
import Emperors from './Emperors';
import Houses from './Houses';
import './App.css';

class App extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render = () => {
    const { value } = this.state;

    return (
      <div className='App'>
        <NavBar></NavBar>
        <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label='Emperors' icon={<PersonIcon />} />
            <Tab label='Houses' icon={<PeopleIcon />} />
        </Tabs>
        <Grid container justify="center">
          {value === 0 && <Emperors></Emperors>}
          {value === 1 && <Houses></Houses>}
        </Grid>
      </div>
    );
  }
}

export default App;
