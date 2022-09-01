import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import ExerciseDetail from "./routes/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import {  } from '@mui/material/colors/';
const myTheme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
    // allVariants: {
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "0",
        },
        body: {
          fontFamily: "Source Sans Pro",
          backgroundColor: "#fffafb",
        },
      },
    },
  },
});
const App = () => (
  <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <Navbar />
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </ScrollToTop>
    <Footer />
  </ThemeProvider>
);
export default App;

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => scrollTo({ top: 0, behavior: "smooth" }), [location]);
  return <>{children}</>;
};
