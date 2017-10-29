/**
 * Created by dandreini16 on 10/29/17.
 */

import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';
import {Header} from 'semantic-ui-react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Icon } from 'semantic-ui-react'



const data = {
    labels: ['Points', 'Rebounds', 'Turnovers', '3PM', 'Off. Rtg.', 'Def. Rtg.', 'Avg. Age'],
    datasets: [
        {
            label: 'Influence Level',
            backgroundColor: 'rgba(151,240,61,0.2)',
            borderColor: 'rgba(130,215,13,0.4)',
            pointBackgroundColor: 'rgba(151,240,61,0.2)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [0.48167766, 0.255899651, 0.113192417, 0.560907101, 0.213129462, 0.206312488, 0.011458247]
        },

    ]
};

export default class RadarChart extends Component{
    render(){
        console.log('doughnut props')
        return(
            <Fade>
            <div>
            <Header size={"huge"}>What Makes Champions Win Finals?</Header>
                <br/>
                <br/>
            <Radar width={450} data = {data} options={{}}
             />
            </div>
            </Fade>
        )}
}