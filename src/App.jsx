import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ExerciseDetail from "./routes/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
const myTheme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Josefin Sans",
          backgroundColor: "#fffafb",
        },
      },
    },
  },
});
const App = () => (
  <>
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
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
