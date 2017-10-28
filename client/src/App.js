import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamBox from './Components/teamBox.js';
import {Grid, Button} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
          <br/>
          <br/>
          <br/>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>


          <Grid centered={true}>
              <TeamBox/>
              <TeamBox/>
        </Grid>
          <Grid align="center">
              <Grid.Row centered={true}>
                <Button primary>Calculate</Button>
              </Grid.Row>
          </Grid>


      </div>
    );
  }
}

export default App;
