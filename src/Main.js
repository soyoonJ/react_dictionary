import React from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import './Style.css';


const Main = (props) => {
  const history = useHistory();
  const my_words = useSelector((state) => state.dictionary.word);
  const my_description = useSelector((state) => state.dictionary.description);
  const my_example = useSelector((state) => state.dictionary.example);

console.log(my_words)
  return (
    <div>
      {/* <Container> */}
      {/* 리덕스로 New.js에서 작성한 데이터 firebase에 모으고, 각 객체의 밸류값을 넣어주면 될 듯 */}
        <div className="container">
          <h3>단어</h3>
          <p>설명</p>
          <p style={{color:"blue"}}>예시</p>
        </div>
      {/* </Container> */}

      <PlusCircle
        onClick={() => {
          history.push("/new");
        }}
      >
          <span className="horiz"></span>
          <span className="vert"></span>
      </PlusCircle>
    </div>
  );
};



const PlusCircle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #3A81FD;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0px 30px 30px 0px;
    cursor:pointer;
    

& .horiz {
    width: 60px;
    height: 10px;
    background: white;
    display: block;
    transform: translate(0px,35px);
    margin: 0px auto;
    border-radius: 20px
    
}

& .vert {
    width: 10px;
    height: 60px;
    background: white;
    display: block;
    transform: translate(35px, 0px);
    border-radius: 20px

}

`;

// const Container= styled.div`
//     width: 4500px;
//     height: 200px;
//     border-radius: 10px;
//     border: 1px solid skyblue;

// `;

export default Main;
