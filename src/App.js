import React from "react";
import CheckList from "./components/checkList";
import CheckedList from "./components/checkedList";

function App() {
  return (
    <div className="App container d-flex justify-content-center">
      <div className="row">
        <CheckList />
        <CheckedList />
      </div>
    </div>
  );
}

export default App;
