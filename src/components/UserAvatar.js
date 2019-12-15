import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAvatar = styled(Avatar)`
    margin-right: .5rem
`

const UserAvatar = ({ name }) => (
    <StyledAvatar>{name.charAt(0)}</StyledAvatar>
)

UserAvatar.propTypes = {
    name: PropTypes.string,
}

export default UserAvatar