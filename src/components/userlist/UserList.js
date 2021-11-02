import React from 'react'
import Card from '../utils/Card'
import UserItem from './UserItem'
import styles from './UserList.module.css'
const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => <UserItem key={user.id} user={user} removeUser={props.removeUser}/>)}
            </ul>
        </Card>
    )
}

export default UserList
