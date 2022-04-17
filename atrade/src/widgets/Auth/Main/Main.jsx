import React from 'react'
import classes from './Main.module.css'

export const Main = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.main_inner}>
        {children}
      </div>
    </div>
  )
}
