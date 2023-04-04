import type { AppProps } from 'next/app';

import AppProvider from '../AppProvider/AppProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppProvider {...pageProps}>
            <Component {...pageProps} />
        </AppProvider>
    );
}
