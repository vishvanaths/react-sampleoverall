import React, { useState, useRef } from 'react'
import Button from '../utils/Button'
import Card from '../utils/Card'
import ModalWindow from '../utils/ModalWindow'
import styles from './UserInfoForm.module.css'

//Sample with Use Ref
const UserInfoForm = (props) => {
    // const [userName, setUserName] = useState('') 
    const userNameRef = useRef('')
    const [nameError, setNameError] = useState(false)
    // const [age, setAge] = useState('')
    const ageRef = useRef('')
    const [ageError, setAgeError] = useState(false)
    const [error, setError] = useState()

    // const nameChangeHandler = (event) => {
    //     const name = event.target.value;
    //     setUserName(name)
    //     if(name === ''){
    //         setNameError(true)
    //     }else{
    //         setNameError(false)
    //     }
    // }

    // const ageChangeHandler = (event) => {
    //     const age = event.target.value;
    //     setAge(age)
    //     if(age < 1){
    //         setAgeError(true)
    //     }else{
    //         setAgeError(false)
    //     }
    // }

    const createUser = (event) => {
        event.preventDefault()
        const name = userNameRef.current.value
        const age = ageRef.current.value
        const newUser = { name: name, age: age }
        if (name.length < 5) {
            setNameError(true)
            setError({ title: 'Error in user details', message: 'User name should be 5 to 50 characters and Age should be 1 to 120' })
            return
        }
        if (+age < 1 || +age > 120) {
            setAgeError(true)
            setError({ title: 'Error in user details', message: 'User name should be 5 to 50 characters and Age should be 1 to 120' });
            return
        }
        setNameError(false)
        props.addUser(newUser)
        userNameRef.current.value = ''
        ageRef.current.value = ''

    }

    const modalClick = () => {
        setError(false)
    }

    return (
        <>
            {error && <ModalWindow title={error.title} message={error.message} onConfirm={modalClick} />}
            <Card className={styles.input}>
                <form onSubmit={createUser}>
                    <div className={(nameError ? styles.error : '')}><label>User Name</label> <input type='text' ref={userNameRef} /></div> {/*value={userName} onChange={nameChangeHandler}*/}
                    <div className={(ageError ? styles.error : '')}><label>Age</label> <input type='number' min='1' max='120' step='1' ref={ageRef} /></div> {/* value={age}  onChange={ageChangeHandler} */}
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </>
    )
}

export default UserInfoForm
