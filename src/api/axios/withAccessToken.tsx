const urlsWithAccessToken = [
    { url: '/todos/1', method: 'get' },
    { url: '/posts', method: 'post' },
];

const withAccessToken = (url: string, method: string): boolean => {
    return urlsWithAccessToken.some((ele) => {
        return ele.url === url && ele.method === method;
    });
};

export default withAccessToken;
