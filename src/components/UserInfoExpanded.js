import React from 'react'
import UserAvatar from './UserAvatar'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const UserInfoWrapper = styled.div`
    display: flex
    flex-direction: row
    align-items: center
`

const UserInfoExpanded = ({ first, last = '' }) => (
    <UserInfoWrapper>
        <UserAvatar name={first} />
        {`${first} ${last}`}
    </UserInfoWrapper>
)

UserInfoExpanded.propTypes = {
    first: PropTypes.string.isRequired,
    last: PropTypes.string,
}

export default UserInfoExpanded