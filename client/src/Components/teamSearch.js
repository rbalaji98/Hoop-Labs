/**
 * Created by dandreini16 on 10/28/17.
 */

import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

const source2 = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

const source = [
    {
        title: 'Cleveland',
        description: 'Cavaliers',
        search: 'cleveland cavaliers'
    },
    {
        title: 'Houston',
        description: 'Rockets',
        search: 'houston rockets'
    }
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