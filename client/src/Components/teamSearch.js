/**
 * Created by dandreini16 on 10/28/17.
 */

import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'


const source = [
    {
        title: 'CLE',
        description: 'Cavaliers',
        search: 'cleveland cavaliers'
    },
    {
        title: 'HOU',
        description: 'Rockets',
        search: 'houston rockets'
    },
    {
        title: 'ATL',
        description: 'Atlanta Hawks',
        search: 'atlanta hawks'
    },
    {
        title: 'BKN',
        description: 'Brooklyn Nets',
        search: 'brooklyn nets'
    },
    {
        title: 'BOS',
        description: 'Boston Celtics',
        search: 'boston celtics'
    },
    {
        title: 'CHA',
        description: 'Charlotte Bobcats',
        search: 'charlotte bobcats'
    },
    {
        title: 'CHI',
        description: 'Chicago Bulls',
        search: 'chicago bulls'
    },
    {
        title: 'DAL',
        description: 'Dallas Mavericks',
        search: 'Dallas Mavericks'
    },
    {
        title: 'DEN',
        description: 'Denver Nuggets',
        search: 'Dallas Mavericks'
    },
    {
        title: 'DET',
        description: 'Detroit Pistons',
        search: 'Dallas Mavericks'
    },
    {
        title: 'GSW',
        description: 'Golden State Warriors',
        search: 'Dallas Mavericks'
    },
    {
        title: 'IND',
        description: 'Indiana Pacers',
        search: 'Dallas Mavericks'
    },
    {
        title: 'LAC',
        description: 'Los Angeles Clippers',
        search: 'Dallas Mavericks'
    },
    {
        title: 'LAL',
        description: 'Los Angeles Lakers',
        search: 'Dallas Mavericks'
    },
    {
        title: 'MEM',
        description: 'Memphis Grizzlies',
        search: 'Dallas Mavericks'
    },
    {
        title: 'MIA',
        description: 'Miami Heat',
        search: 'Dallas Mavericks'
    },
    {
        title: 'MIL',
        description: 'Milwaukee Bucks',
        search: 'Dallas Mavericks'
    },
    {
        title: 'MIN',
        description: 'Minnesota Timberwolves',
        search: 'Dallas Mavericks'
    },
    {
        title: 'NOP',
        description: 'New Orleans Pelicans',
        search: 'Dallas Mavericks'
    },
    {
        title: 'NYK',
        description: 'New York Knicks',
        search: 'Dallas Mavericks'
    },
    {
        title: 'OKC',
        description: 'Oklahoma City Thunder',
        search: 'Dallas Mavericks'
    },
    {
        title: 'ORL',
        description: 'Orlando Magic',
        search: 'Dallas Mavericks'
    },
    {
        title: 'PHI',
        description: 'Philadelphia 76ers',
        search: 'Dallas Mavericks'
    },
    {
        title: 'PHX',
        description: 'Phoenix Suns',
        search: 'Dallas Mavericks'
    },
    {
        title: 'POR',
        description: 'Portland Trail Blazers',
        search: 'Dallas Mavericks'
    },
    {
        title: 'SAC',
        description: 'Sacramento Kings',
        search: 'Dallas Mavericks'
    },
    {
        title: 'SAS',
        description: 'San Antonio Spurs',
        search: 'Dallas Mavericks'
    },
    {
        title: 'TOR',
        description: 'Toronto Raptors',
        search: 'Dallas Mavericks'
    },
    {
        title: 'UTA',
        description: 'Utah Jazz',
        search: 'Dallas Mavericks'
    },
    {
        title: 'WAS',
        description: 'Washington Wizards',
        search: 'Dallas Mavericks'
    },




]

export default class TeamSearch extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => {
        console.log(result)

        this.props.teamChange(result, this.props.num)

    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.description)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 500)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (


                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.handleSearchChange}
                        results={results}
                        value={value}
                        {...this.props}
                    />

        )
    }
}