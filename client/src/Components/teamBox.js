
/**
 * Created by dandreini16 on 10/28/17.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Search, Grid, Header } from 'semantic-ui-react'

import TeamSearch from './teamSearch.js';

export default class TeamBox extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {value: '', city:'Cleveland', name:'Cavaliers'}
    //     this.teamChange = this.teamChange.bind(this)
    // }
    constructor(props) {
        super(props)
        //this.teamChange = this.teamChange.bind(this)
        this.teamChange=this.props.teamChange.bind(this)
    }


    render() {
        {console.log("props", this.props)}
        return(


            <div>
                <Card>
                    <Image src='/assets/images/avatar/large/matthew.png'/>
                    <Card.Content>
                        <Card.Header>
                            {this.props.city}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.name}
                        </Card.Meta>
                        <Card.Description>

                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user'/>
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <TeamSearch value = {this.value} teamChange = {this.teamChange} num={this.props.num} />
            </div>

        )
    }
}


