import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500">Đây là tailwind và react đang hoạt động</h1>
    </>
  );
}

export default App;
