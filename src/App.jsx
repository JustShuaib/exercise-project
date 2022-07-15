import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ExerciseDetail from "./routes/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </>
);
export default App;
