import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); 
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const reduce = count - 1;
    setCount(reduce);
  };
  return (
    <div
      style={{
        border: '1px solid tomato',
        margin: '15px',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <h3>Counter:{count}</h3>
      <button onClick={handleAdd} style={{ marginRight: '10px' }}>
        Add
      </button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
