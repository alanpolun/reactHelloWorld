import React from 'react';

function Message({ sayTo }) {
    return <h1>Hello {sayTo ? sayTo : 'World'}</h1>;
}

export default Message;