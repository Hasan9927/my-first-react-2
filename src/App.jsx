import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick() {
    alert('Btn CLicked');
  }
  const addToFive = num => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert('Second Click');
        }}
      >
        Click Me
      </button>
      <button onClick={() => addToFive(3)}>Add Number</button>
    </>
  );
}

export default App;
