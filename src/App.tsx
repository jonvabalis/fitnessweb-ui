import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
