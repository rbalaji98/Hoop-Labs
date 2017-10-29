/**
 * Created by dandreini16 on 10/28/17.
 */


import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import {Doughnut} from 'react-chartjs-2';

var createReactClass = require('create-react-class');
export default class DoughnutChart extends Component{
    render(){
        console.log('doughnut props')
        return(
        <Doughnut width={600} data = {{
            datasets: [{
            data: [this.props.prob, 1-this.props.prob],
                backgroundColor:["rgb(90, 214, 160)", "rgb(241, 126, 153)"]
        }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
            'Team1',
            'Team2'
            ],

        }}
        options={{

        }}  />
        )}
}