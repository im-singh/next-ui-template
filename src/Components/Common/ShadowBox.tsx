import { Box } from '@mui/material';
import { ReactNode } from 'react';

import styles from './shadowbox.module.css';

interface Props {
    children: ReactNode;
}

export default function ShadowBox(props: Props) {
    return <Box className={styles.root}>{props.children}</Box>;
}
