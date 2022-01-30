// commit test
import React from "react";
import styled from "styled-components";
import {Route} from "react-router-dom"

import './App.css';
import New from './New';
import Home from './Home';


function App() {

  return (
    <div className="App">
      <h1>항해99 사전</h1>
      <Line />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/new">
        <New />
      </Route>

    </div>
  );
}


const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;


export default App;
