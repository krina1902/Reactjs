import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Background, Text,Incnumber,Decnumber } from './Action';
import React from "react";
import  { ThemeProvider , styled} from "styled-components";
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "pink",
  dark: "#2d2d2d",
});

const Container = styled.div`
  height : 1000px;
  background-color: ${backgroundColor};
  color:white;
`;

function App() {
  const textstate = useSelector((state)=> state.Textchange)
  const count = useSelector((state)=> state.Changeno)
  const initialstate = useSelector((state) => state.Background.initialstate);
  const dispatch = useDispatch()
  
  return (
   <>
  
  <ThemeProvider theme={{ theme: initialstate ? "dark" : "light" }}>
    <Container>
    <input
        type="checkbox"
        checked={initialstate}
        onChange={() => dispatch(Background())}
      ></input>Use For Dark Mode
    <h1>{textstate}</h1>
  <button onClick={()=> dispatch(Text())}> AddText</button><br></br>
  <button onClick={() => dispatch(Incnumber())}>+</button>
  <h4>{count}</h4>
  <button onClick={()=> dispatch(Decnumber())}>-</button>
  
      </Container>
  </ThemeProvider>
   </>
  );
}

export default App;
