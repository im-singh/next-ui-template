import React from 'react';
import { gql } from '@apollo/client';

import client from '../../api/grahql/apolloClient';

export default function serverside(props: any) {
    console.log('#n props: ', props);
    return <div>serverside</div>;
}

export async function getServerSideProps() {
    const { data } = await client.query({
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

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    };
}
