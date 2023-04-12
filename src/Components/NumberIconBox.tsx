import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppTheme } from '../styles/theme/theme';
import styles from './numbericon.module.css';

interface BoxElements {
    numb: string;
    text: string;
    url: string;
    url2: string;
}

export default function NumberIconBox(props: BoxElements) {
    const classes = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.box}>
                <Typography className={styles.numb} component={'h1'}>
                    {props.numb}
                </Typography>

                <div className={styles.images}>
                    <img className={styles.imgIcon} src={props.url} />
                    <img className={styles.imgIcononhover} src={props.url2} />
                </div>
            </div>
            <Typography
                className={`${styles.text} ${classes.text}`}
                component={'h3'}
            >
                {props.text}
            </Typography>
        </div>
    );
}

// Only use to set dynamic styling
const useStyles = makeStyles((theme: AppTheme) => ({
    text: {
        color: theme.palette.primary.main,
    },
}));
