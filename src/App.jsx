import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import "./App.css"
import Footer from "./Components/Footer";
export default function App() {
  return (
    <Routers>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
    </Routers>
  );
}
