import CONSTANTS from '../../config/constants.json'

const { API_ENDPOINT } = CONSTANTS

export const getUsers = async () => {
    const res = await fetch(`${API_ENDPOINT}/user/all/?expand=team`)
    return await res.json()
}

export const getTeams = async () => {
    const res = await fetch(`${API_ENDPOINT}/team/all`)
    return await res.json()
}

export const changeUserStatus = (userId, focused) => 
    fetch(`${API_ENDPOINT}/user/${userId}/status/?focused=${focused}`, { method: 'post' })