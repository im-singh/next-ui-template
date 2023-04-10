import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import Axios from '../../api/axios/axiosInstance';

export default function Clientside() {
    useEffect(() => {
        callApi();
        callAddPost();
    }, []);

    const callApi = async () => {
        const result = await Axios.get('/todos/1');
        console.log('#n result: ', result);
    };
    const callAddPost = async () => {
        const result = await Axios.post('/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        console.log('#n result: ', result);
    };

    const QUERY = gql`
        query Countries {
            countries {
                code
                name
                emoji
            }
        }
    `;

    const { loading, data, error } = useQuery(QUERY);
    if (loading || error) {
        return null;
    }
    console.log('#n clientside: data', data);
    return <div>clientside</div>;
}
