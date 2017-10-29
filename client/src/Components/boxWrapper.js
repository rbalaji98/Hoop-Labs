/**
 * Created by dandreini16 on 10/28/17.
 */
import React, { Component } from 'react';

import { Search, Grid, Header, Button } from 'semantic-ui-react'

import TeamSearch from './teamSearch.js';
import TeamBox from './teamBox'
import DoughnutChart from './doughnut.js';

const data = {
    Houston:{
        Cleveland: .5
    },
    Cleveland:{
        Houston:.5
    }
}

export default class BoxWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {prob: .5, value: '', city1:'Houston', name1:'Rockets', city2:'Cleveland', name2:'Cavaliers', key1:'1', key2:'2'}
        this.teamChange = this.teamChange.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }

    teamChange(team, num){
        console.log("hit", team, num)
        if (num == 1){
            this.setState({
                city1: team.title,
                name1: team.description,
                value: ""
            })
        } else {
            this.setState({
                city2: team.title,
                name2: team.description,
                value2: ""
            })
        }

    }
    handleClick(){

        const obj = {};
        obj['prob'] = data[this.state.city1][this.state.city2];
        console.log('obj', obj)
        this.setState(obj)
    }

    render() {

        return(
            <Grid centered={true}>
                <TeamBox num = {this.state.key1} value = {this.value} teamChange = {this.teamChange} city={this.state.city1} name={this.state.name1}/>
                <TeamBox num = {this.state.key2} value = {this.value} teamChange = {this.teamChange} city={this.state.city2} name={this.state.name2}/>


                    <Grid.Row centered={true}>
                        <Button primary={true} onClick={this.handleClick}>Calculate</Button>
                    </Grid.Row>

                <DoughnutChart prob={this.state.prob} team1 = {this.state.name1} team2={this.state.name2} />
            </Grid>
        )
    }
}