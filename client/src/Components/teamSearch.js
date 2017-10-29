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
        search: 'dallas mavericks'
    },
    {
        title: 'DEN',
        description: 'Denver Nuggets',
        search: 'denver nuggets'
    },
    {
        title: 'DET',
        description: 'Detroit Pistons',
        search: 'detroit pistons'
    },
    {
        title: 'GSW',
        description: 'Golden State Warriors',
        search: 'golden state warriors'
    },
    {
        title: 'IND',
        description: 'Indiana Pacers',
        search: 'indiana pacers'
    },
    {
        title: 'LAC',
        description: 'Los Angeles Clippers',
        search: 'los angeles clippers'
    },
    {
        title: 'LAL',
        description: 'Los Angeles Lakers',
        search: 'los angeles lakers'
    },
    {
        title: 'MEM',
        description: 'Memphis Grizzlies',
        search: 'memphis grizzlies'
    },
    {
        title: 'MIA',
        description: 'Miami Heat',
        search: 'miami heat'
    },
    {
        title: 'MIL',
        description: 'Milwaukee Bucks',
        search: 'milwaukee buks'
    },
    {
        title: 'MIN',
        description: 'Minnesota Timberwolves',
        search: 'minnesota timberwolves'
    },
    {
        title: 'NOP',
        description: 'New Orleans Pelicans',
        search: 'new orleans pelicans'
    },
    {
        title: 'NYK',
        description: 'New York Knicks',
        search: 'new york knicks'
    },
    {
        title: 'OKC',
        description: 'Oklahoma City Thunder',
        search: 'oklahoma city thunder'
    },
    {
        title: 'ORL',
        description: 'Orlando Magic',
        search: 'orlando magic'
    },
    {
        title: 'PHI',
        description: 'Philadelphia 76ers',
        search: 'philadelphia 76ers'
    },
    {
        title: 'PHX',
        description: 'Phoenix Suns',
        search: 'phoenix suns'
    },
    {
        title: 'POR',
        description: 'Portland Trail Blazers',
        search: 'portland trail brazers'
    },
    {
        title: 'SAC',
        description: 'Sacramento Kings',
        search: 'sacramento kings'
    },
    {
        title: 'SAS',
        description: 'San Antonio Spurs',
        search: 'san antonio spurs'
    },
    {
        title: 'TOR',
        description: 'Toronto Raptors',
        search: 'toronto raptors'
    },
    {
        title: 'UTA',
        description: 'Utah Jazz',
        search: 'utah jazz'
    },
    {
        title: 'WAS',
        description: 'Washington Wizards',
        search: 'washington wizards'
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
            const isMatch = result => re.test(result.search)

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