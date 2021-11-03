import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from './ModalWindow.module.css'

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
    )
}

const ModalPopup = (props) => {
    return (
        <Card  className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}

const ModalWindow = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}></BackDrop>, document.getElementById('modalBackdrops'))}
            {ReactDOM.createPortal(<ModalPopup title={props.title} message={props.message} onConfirm={props.onConfirm}></ModalPopup>, document.getElementById('modalPopups'))}
        </>
    )
}

export default ModalWindow
