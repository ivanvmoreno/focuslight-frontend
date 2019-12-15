import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UsersTable from '../../components/UsersTable'
import CONSTANTS from '../../config/constants.json'
import styled, { createGlobalStyle } from 'styled-components'
import { changeUserStatus, getUsers, getTeams } from './services'

const { SITE_TITLE } = CONSTANTS

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0
        padding: 0
    }
`

const Container = styled.div`
    margin: 0
`

export default class Home extends Component {
    state = {
        teams: {},
        users: {}
    }

    async componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const users = await getUsers()
        const teams = await getTeams()
        this.setState({ users, teams })
    }

    onFocusSwitch = async userId => {
        try {
            const newStatus = !this.state.users[userId].focused
            await changeUserStatus(userId, newStatus)
            await this.fetchData()
        } catch(err) {
            console.log('Error updating user status', err)
        }
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <Container>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                { SITE_TITLE }
                            </Typography>
                        </Toolbar>    
                    </AppBar>
                    <UsersTable 
                        users={this.state.users}
                        onFocusSwitch={this.onFocusSwitch}
                    />
                </Container>
            </>
        )
    }
}