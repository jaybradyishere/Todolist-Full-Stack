import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  useEffect(
    function () {
      async function testFetch() {
        const res = await fetch("http://localhost:8000/api/todo");
        const data = await res.json();
        setTodo(data);
      }
      testFetch();
    },
    [todo]
  );

  return (
    <div>
      <h1>Your todo here</h1>
      <p>{todo}</p>
    </div>
  );
}

export default App;
