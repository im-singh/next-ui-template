import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider as _ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
});

interface Props {
    children: ReactNode;
}

export default function ApolloProvider(props: Props) {
    return (
        <_ApolloProvider client={apolloClient}>
            {props.children}
        </_ApolloProvider>
    );
}
