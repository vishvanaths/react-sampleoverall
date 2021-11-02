import React, { useState } from 'react'
import UserInfoForm from './components/userinfo/UserInfoForm'
import UserList from './components/userlist/UserList'

const App = () => {
  const [users, setUsers] = useState([])
  
  const addUser = (user) => {
    const newUser = {...user, id : Math.random().toString()}
    setUsers((prevUsers) => [newUser, ...prevUsers])
  }

  const removeUser = (id) => {
    setUsers((prevUsers) => {
      const filteredUser = prevUsers.filter(user => id !== user.id)
      return filteredUser
    })
  }
  
  return (
    <div>
      <UserInfoForm addUser={addUser}/>
      <UserList users={users} removeUser={removeUser}/>
    </div>
  )
}

export default App
