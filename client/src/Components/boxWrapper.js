/**
 * Created by dandreini16 on 10/28/17.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Search, Grid, Header } from 'semantic-ui-react'

import TeamSearch from './teamSearch.js';
import TeamBox from './teamBox'

export default class BoxWrapper extends Component {

    render() {
        return(
            <div>
                <TeamBox/>
                <TeamSearch/>
            </div>
        )
    }
}