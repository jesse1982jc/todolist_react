import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;

// datatype like this...
// [{id: 1234, text: "walk the dog", completed: false},
//  id: 1235, text: "learning React", completed: false]
