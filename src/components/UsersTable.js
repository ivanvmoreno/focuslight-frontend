import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types'

const COLUMNS = [
    {
        id: 'focus-toggle',
        label: '',
        field: 'focused'
    },
    {
        id: 'user-name',
        label: 'Name',
        field: 'name'
    },
    {
        id: 'user-email',
        label: 'Email',
        field: 'email'
    },
    {
        id: 'user-team',
        label: 'Team',
        field: 'team'
    },
]

const UsersTable = ({ users }) => {
    return (
        <Table stickyHeader>
          <TableHead>
            <TableRow>
                {COLUMNS.map(col => (
                    <TableCell
                        key={col.id}
                    >
                        {col.label}
                    </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
                <TableRow hover tabIndex={-1} key={user.id}>
                    COLUMNS.map(col => (
                        <TableCell key={col.id}>
                            {user[col.field]}
                        </TableCell>
                    ))
                </TableRow>
              ))}
          </TableBody>
        </Table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default UsersTable