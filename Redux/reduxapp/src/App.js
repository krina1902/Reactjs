import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Background, Text } from './Action';
import React from "react";
import  { ThemeProvider } from "styled-components";
import Darkmode from './Darkmode';
function App() {
  const textstate = useSelector((state)=> state.Textchange)
  const initialstate = useSelector((state) => state.Background.initialstate);
  const dispatch = useDispatch()
  return (
   <>
   <h1>{textstate}</h1>
  <button onClick={()=> dispatch(Text())}> AddText</button>
  <Darkmode>

  <input
        type="checkbox"
        checked={initialstate}
        onChange={() => dispatch(Background())}
      ></input>
  </Darkmode>
   </>
  );
}

export default App;
