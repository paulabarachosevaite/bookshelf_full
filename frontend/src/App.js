import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";
import List from "./pages/List";
import Lists from "./pages/Lists";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<CreateList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/lists/all" element={<Lists />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
