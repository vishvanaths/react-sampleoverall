import React, { useState } from 'react'
import Button from '../utils/Button'
import Card from '../utils/Card'
import styles from './UserInfoForm.module.css'

const UserInfoForm = (props) => {
    const [userName, setUserName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [age, setAge] = useState('')
    const [ageError, setAgeError] = useState(false)

    const nameChangeHandler = (event) => {
        const name = event.target.value;
        setUserName(name)
        if(name === ''){
            setNameError(true)
        }else{
            setNameError(false)
        }
    }

    const ageChangeHandler = (event) => {
        const age = event.target.value;
        setAge(age)
        if(age < 1){
            setAgeError(true)
        }else{
            setAgeError(false)
        }
    }
    const createUser = (event) => { 
        event.preventDefault()
        const newUser = {name : userName, age : age}
        props.addUser(newUser)
        setUserName('')
        setAge('')
    }
    return (
        <Card className={styles.input}>
            <div className={(nameError ? styles.error : '')}><label>User Name</label> <input type='text' value={userName} onChange={nameChangeHandler}/></div>
            <div className={(ageError ? styles.error : '')}><label>Age</label> <input type='number' min='1' value={age} onChange={ageChangeHandler}/></div>
            <Button type='submit' onClick={createUser}>Add user</Button>
        </Card>
    )
}

export default UserInfoForm
