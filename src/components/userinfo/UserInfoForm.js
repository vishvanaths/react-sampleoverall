import React, { useState } from 'react'
import Button from '../utils/Button'
import Card from '../utils/Card'
import ModalWindow from '../utils/ModalWindow'
import styles from './UserInfoForm.module.css'

const UserInfoForm = (props) => {
    const [userName, setUserName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [age, setAge] = useState('')
    const [ageError, setAgeError] = useState(false)
    const [error, setError] = useState()

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
        if(userName.length < 5 ){
            setError({title:'Error in user details', message:'User name should be 5 to 50 characters and Age should be 1 to 150'});
        }else{
            props.addUser(newUser)
            setUserName('')
            setAge('')
        }
    }

    const modalClick = () => {
        setError(false)
    }

    return (
        <>
        {error && <ModalWindow  title={error.title} message={error.message} onConfirm={modalClick}/>}
        <Card className={styles.input}>
            <form   onSubmit={createUser}>
            <div className={(nameError ? styles.error : '')}><label>User Name</label> <input type='text' value={userName} onChange={nameChangeHandler}/></div>
            <div className={(ageError ? styles.error : '')}><label>Age</label> <input type='number' min='1' value={age} max='120' step='1' onChange={ageChangeHandler}/></div>
            <Button type='submit'>Add user</Button>
            </form>
        </Card>
        </>
    )
}

export default UserInfoForm
