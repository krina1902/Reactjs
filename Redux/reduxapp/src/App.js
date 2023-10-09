import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { Background, Text,Incnumber,Decnumber, Changecolor } from './Action';
import React from "react";
import  { ThemeProvider , styled} from "styled-components";
import theme from "styled-theming";
import { bgkey } from './Reducer/Changecolor';

export const backgroundColor = theme("theme", {
  light: "pink",
  dark: "#2d2d2d",
});

const Container = styled.div`
  height : 1000px;
  background-color: ${backgroundColor};
  color:white;
`;

const Contain = styled.div`
  height : 100px;
`;



function App() {
  const textstate = useSelector((state)=> state.Textchange)
  const count = useSelector((state)=> state.Changeno)
  const initialstate = useSelector((state) => state.Background.initialstate);
  const colorstate = useSelector((state) => { return state [bgkey]});
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
  <button onClick={()=> dispatch(Decnumber())}>-</button><br></br>
  <button onClick={()=> dispatch(Changecolor())}>Color</button>
   <p style={{backgroundColor:colorstate.color}} className='color'></p>
   
  
      </Container>
  </ThemeProvider>
   </>
  );
}

export default App;
