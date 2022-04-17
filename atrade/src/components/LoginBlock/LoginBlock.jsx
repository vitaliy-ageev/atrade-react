import React from 'react';
import { Or_separator } from '../UI/Separators/Or_separator/Or_separator';
import classes from './LoginBlock.module.css';
import { Method } from './Method/Method';
import { Title } from './Title/Title';

export const LoginBlock = () => {
    return (
        <div className={classes.login_block}>
            <div className={classes.login_block_inner}>
                <Title />

                <div className={classes.login_contrainer}>
                    <Method />
                    <Method />
                </div>

                <div className={classes.login_contrainer}>
                    <Method />
                    <Method />
                    <Method />
                    <Method />
                </div>

                <Or_separator />

                <div className={classes.login_contrainer}>
                    <Method />
                </div>

            </div>
        </div>
    )
}
