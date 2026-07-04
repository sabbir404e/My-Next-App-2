'use client'

import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0);
    console.log('counter value in counter component');
    return (
        <div>
            <h2 className="text-5xl">Counter: {count}</h2>
            <button onClick={ () => setCount(count + 1)} className="border border-amber-600 bg-black-500">Increment</button>
        </div>
    );
};

export default Counter;