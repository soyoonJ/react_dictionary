// commit test
import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom"
import {db} from "./firebase"
import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadCardsFB } from "./redux/modules/dictionary";


import './App.css';
import Home from './Home';
import New from './New';
import Update from './Update';
import NotFound from './NotFound';



function App() {
  const dispatch = useDispatch();
  React.useEffect( () => {
    dispatch(loadCardsFB());
}, []);

  return (
    <div className="App">
      <header>
        <div className="title-container">
        <h1 className="title">👩‍💻 기억삭제방지 단어장 🧠</h1>
        </div>
      </header>
      {/* <Line /> */}
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/new">
        <New />
      </Route>
      <Route path="/update/:word_id">
        <Update />
      </Route>
      <Route component={NotFound} />
      </Switch>

    </div>
  );
}


// const Line = styled.hr`
//   margin: 16px 0px;
//   border: 1px dotted white;
// `;


export default App;
