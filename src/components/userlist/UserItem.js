import React from 'react'
import Card from '../utils/Card'

const UserItem = ({user, removeUser}) => {
    const userDeleteHandler = (event) => {
        event.preventDefault()
        removeUser(user.id)
    }

    return (
        <Card>
            <li onClick={userDeleteHandler}>
                {user.name} : {user.age} years old
            </li>
        </Card>
    )
}

export default UserItem
