import React from 'react';
import { gql } from '@apollo/client';
import client from '../../api/grahql/apolloClient';

export default function Static(props: any) {
    console.log('#n static props: ', props);
    return <div>static</div>;
}

export async function getStaticProps() {
    const { data, error } = await client.query({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `,
    });
    console.log('#n statick data', data);
    return {
        props: {
            error: error || '',
            countries: data.countries.slice(0, 4),
        },
    };
}
