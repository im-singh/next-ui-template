import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';
import ReduxProvider from './ReduxProvider';
import ApolloProvider from './ApolloProvider';
import ErrorBoundary from './ErrorBoundary';

interface Props extends AppProps {
    children: ReactNode;
}

export default function AppProvider({ pageProps, children }: Props) {
    return (
        <ErrorBoundary {...pageProps}>
            <ThemeProvider {...pageProps}>
                <ApolloProvider>
                    <ReduxProvider>{children}</ReduxProvider>
                </ApolloProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}
