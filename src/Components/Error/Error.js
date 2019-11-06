import React from 'react';

const Error = ({message}) => {
    return (
        <div style={{
                gridColumn: "2/3"
            }}>
            <h2 style={{
                color: "gray",
                opacity: .5,
                textAlign: "center",
                paddingTop: "5rem",
                fontWeight: 200,
                fontSize: "2rem"
                }}>
                {message}
                </h2>
        </div>
    );
};

export default Error;