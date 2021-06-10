import React from 'react';
import "./square.css";

const Square = (props) => {
    const {onClick, value} = props;
    return (
        <button className="square" onClick={onClick}>{value}</button>
    );
}

export default Square;
