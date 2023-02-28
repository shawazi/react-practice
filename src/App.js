import { useState } from 'react';
import './App.css';

function App() {
  // https://robohash.org/input-string
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, input]);
    setInput('');
  }
  
  const handleDelete = index => {
    const newList = [...list];
    console.log(index);
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Generate Robot" 
        value={input}
        onChange={e => setInput(e.target.value)}
         />
        <button type="submit">Enter</button>
      </form>
      <h2>Robot List</h2>
      <div className="image-container">
        {list.map((robot, index) => {
          return <img src={`https://robohash.org/${robot}`}
          alt={robot}
          key={index}
          onClick={() => handleDelete(index)} />
        })}
      </div>
    </div>
  );
}

export default App;
