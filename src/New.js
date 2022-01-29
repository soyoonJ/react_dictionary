import React from "react";
import {Route, useHistory } from "react-router-dom"
import styled from "styled-components";
import './Style.css';

const New = (props) => {
  const history = useHistory();
  console.log(props);
  const word = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);

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

        <button>추가하기</button>

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