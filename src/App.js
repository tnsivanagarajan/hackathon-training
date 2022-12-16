import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <div className='appContainer'>
              <div className="header"></div>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Navigate replace to="/login" />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
