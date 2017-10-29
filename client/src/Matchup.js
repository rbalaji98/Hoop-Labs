/**
 * Created by dandreini16 on 10/28/17.
 */
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import TeamBox from './Components/teamBox.js';
import {Grid, Button} from 'semantic-ui-react';
import RadarChart from './Components/Radar';

import BoxWrapper from './Components/boxWrapper';

class Matchup extends Component {
    render() {
        return (
            <div className="App">
                <br/>
                <br/>
                <br/>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>


                <BoxWrapper/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <RadarChart/>
                <br/>
                <br/>
                <br/>
                <br/>




            </div>
        );
    }
}

export default Matchup;

