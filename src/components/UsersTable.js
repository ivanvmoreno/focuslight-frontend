import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Switch from '@material-ui/core/Switch'
import UserInfoExpanded from './UserInfoExpanded'
import PropTypes from 'prop-types'

const COLUMNS = [
    {
        id: 'user-name',
        label: 'Name',
        field: 'name',
        format: ({ name: { first, last } }) => <UserInfoExpanded first={first} last={last} />
    },
    {
        id: 'user-email',
        label: 'Email',
        field: 'email',
        format: ({ email }) => email
    },
    {
        id: 'user-team',
        label: 'Team',
        field: 'team',
        format: ({ team: userTeam }, teams) => teams[userTeam].name
    },
]

const UsersTable = ({ users, teams, onFocusSwitch }) => {
    return (
        <Table stickyHeader>
          <TableHead>
            <TableRow>
                <TableCell key="focus-switch" />
                {COLUMNS.map(col => (
                    <TableCell key={col.id}>
                        {col.label}
                    </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(users).map(([id, user]) => (
                <TableRow hover tabIndex={-1} key={id}>
                    <TableCell key="focus-switch">
                        <Switch 
                            checked={user.focused}
                            onChange={() => onFocusSwitch(id)}
                        />
                    </TableCell>
                    {COLUMNS.map(col => (
                        <TableCell key={col.id}>
                            {col.format(user, teams)}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
          </TableBody>
        </Table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.objectOf(PropTypes.object),
    onFocusSwitch: PropTypes.func.isRequired
}

export default UsersTable