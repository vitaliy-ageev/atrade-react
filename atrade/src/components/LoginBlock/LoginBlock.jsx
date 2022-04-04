import React from 'react';
import classes from './LoginBlock.module.css';
import { SignUp } from './Title/Forms/SignUp/SignUp';
import { Title } from './Title/Title';

export const LoginBlock = () => {


    return (
        <div className={classes.login_block}>
            <div className={classes.login_block_inner}>
                <Title />
                <SignUp />
            </div>
        </div>
    )
}
