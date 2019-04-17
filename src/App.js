import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import logo from './logo.svg';
import  NavBar from './NavBar';
import People from './People';
import Groups  from './Groups';
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
            <Tab label='People' icon={<PersonIcon />} />
            <Tab label='Groups' icon={<PeopleIcon />} />
        </Tabs>
        {value === 0 && <People></People>}
        {value === 1 && <Groups></Groups>}
      </div>
    );
  }
}

export default App;
