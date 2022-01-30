import React from "react";
// import {useHistory } from "react-router-dom"
import {useDispatch} from "react-redux";
import { createCard } from "./redux/modules/dictionary";

// import styled from "styled-components";
import './Style.css';

const New = (props) => {
//   const history = useHistory();
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);

  const addNewWord = () => {

    dispatch(createCard({word:word.current.value, description:description.current.value, example:example.current.value}));

    // dispatch(addBucketFB({text:text.current.value, completed: false})) 
  };

  return (
    <div>
        <h4>단어 추가하기</h4>

        <div className="input-box">
            <label htmlFor="word"
            style={{textAlign:"left"}}>단어</label>
            <input id="word" ref={word}></input>
        </div>

        <div className="input-box">
            <label htmlFor="description"
            style={{textAlign:"left"}}>설명</label>
            <input id="description" ref={description}></input>
        </div>

        <div className="input-box">
            <label htmlFor="example"
            style={{textAlign:"left"}}>예시</label>
            <input id="example" ref={example}></input>
        </div>

        <button onClick={addNewWord}>추가하기</button>

      {/* 백 버튼 클릭 시 메인 페이지로 이동 */}
      {/* <div
        onClick={() => {
          history.push("/");
        }}
      /> */}
    </div>
  );
};

export default New;