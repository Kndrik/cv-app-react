import React from 'react';

export default function Button({ clickEvent, text, className }) {
    return <button onClick={clickEvent} className={className}>{text}</button>
}