import React from 'react';

const NotFound = () => {
    const notFoundStyle={
        color:"red",
        font:"50px",
        padding:"182px"
    }
    return (
        <div style={notFoundStyle}>
            <h2>Page Not Found</h2>
            <p>Please Enter The Correct URL!!</p>
        </div>
    );
};

export default NotFound;