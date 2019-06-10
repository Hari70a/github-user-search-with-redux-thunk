import React from 'react';

export const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
    <div>
        <button onClick={onIncrementAsync} className="button">
            Increment after 1 second
    </button>
        {' '}
        <button className="button" onClick={onIncrement}>
            Increment
    </button>
        {' '}
        <button className="button" onClick={onDecrement}>
            Decrement
    </button>
        <hr />
        <div>
            Clicked: {value} times
    </div>
    </div>
)