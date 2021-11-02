import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    const classN = `${styles.card} ${props.className}`
    return (
        <div className={classN}>{props.children}</div>
    )
}

export default Card
