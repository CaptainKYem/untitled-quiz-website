import React, { useState } from 'react';

/**
 * A simple counter component, for demonstration purposes.
 */
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <p>You have clicked the button {count} time(s).</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </main>
  );
};

export default Counter;