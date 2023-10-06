import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const Darkmode = ({ children }) => {
  const initialstate = useSelector((state) => state.Background.initialstate);
  return (
    <ThemeProvider theme={{ theme: initialstate ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default Darkmode;