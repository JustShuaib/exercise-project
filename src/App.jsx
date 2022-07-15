import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ExerciseDetail from "./routes/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
const App = () => (
  <>
    <ThemeProvider
      theme={{
        typography: {
          fontFamily: "Josefin Sans",
        },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </>
);
export default App;
