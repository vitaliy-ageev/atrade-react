import React from 'react'
import classes from './Footer.module.css'

export const Footer = ({ children }) => {
    return (
        <div className={classes.footer}>
            {children}
        </div>
    )
}
