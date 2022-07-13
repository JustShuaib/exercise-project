import { Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "./App.css";
import Home from "./routes/Home";
import ExerciseDetail from "./routes/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Josefin Sans",
          backgroundColor: "#fffafb",
          "&::-webkit-scrollbar": {
            width: "0",
          },
        },
      },
    },
  },
});
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </ThemeProvider>
);
export default App;
