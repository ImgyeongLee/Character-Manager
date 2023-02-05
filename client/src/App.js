import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import World from "./pages/World";
import Scenario from "./pages/Scenario";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character" element={<Character />}></Route>
        <Route path="/world" element={<World />}></Route>
        <Route path="/scenario" element={<Scenario />}></Route>
        <Route path="/character/:id" element={<Character />}></Route>
        <Route path="/world/:id" element={<World />}></Route>
        <Route path="/scenario/:id" element={<Scenario />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
