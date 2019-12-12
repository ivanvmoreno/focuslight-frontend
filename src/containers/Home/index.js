import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '../../components/Container'
import { createGlobalStyle } from 'styled-components'
import { getUsers, getTeams } from './fetchData'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0
        padding: 0
    }
`

export default class Home extends Component {
    state = {
        teams: {}
    }

    async componentDidMount() {
        const users = await getUsers()
        const teams = await getTeams()
        this.setState({ users, teams })
    }

    renderTeams() {

    }

    render() {
        return (
            <>
                <GlobalStyle />
                <Container>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                focused.works
                            </Typography>
                        </Toolbar>    
                    </AppBar>
                </Container>
            </>
        )
    }
}