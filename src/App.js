import './App.css';

function App() {

  const addTodo = () => {
    console.log("button clicked");
  }

  return (
    <div className="App">
      <h1>App with Firebase and React.js</h1>
      <form>
        <input type="text" />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
