import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';
import ReduxProvider from './ReduxProvider';

interface Props extends AppProps {
    children: ReactNode;
}

export default function AppProvider({ pageProps, children }: Props) {
    return (
        <ThemeProvider {...pageProps}>
            <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
    );
}
