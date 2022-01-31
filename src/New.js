import React from "react";
import styled from "styled-components";
// import {useHistory } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCard, createCardFB } from "./redux/modules/dictionary";

import Button from '@mui/material/Button';

// import styled from "styled-components";
import './Style.css';


const New = (props) => {

  // const [list, setList] = React.useState([
  //   {word:"단어입니다", description:"설명입니다설명입니다줄글줄글", example:"예시입니다예시입니다"},
  // ]);
//   const history = useHistory();
  const history = useHistory();
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);

  const addNewWord = () => {

    // dispatch(createCard({word:word.current.value, description:description.current.value, example:example.current.value}));
    console.log(description.current.value);
    dispatch(createCardFB({word:word.current.value, description:description.current.value, example:example.current.value})) 
    history.goBack();
    window.location.replace("/")
  
  };

  return (
    <div>
      <InputContainer>
        {/* <h3>단어 추가하기</h3> */}
        <form>
          <div className="input-box">
            <label htmlFor="words" style={{ textAlign: "left" }}>
              단어
            </label>
            <textarea id="words" className="textarea" ref={word} placeholder="추가할 단어를 입력해주세요" required></textarea>
          </div>

          <div className="input-box">
            <label htmlFor="descriptions" style={{ textAlign: "left" }}>
              뜻
            </label>
            <textarea id="descriptions" className="textarea" rows="5"
            style={{
              height:"70px"
            }}
              ref={description} placeholder="단어의 뜻을 입력해주세요" required></textarea>
          </div>

          <div className="input-box">
            <label htmlFor="examples" style={{ textAlign: "left" }}>
              예문
            </label>
            <textarea id="examples" className="textarea" rows="5"
            style={{
              height:"70px"
            }}
            ref={example} placeholder="예시문장을 입력해주세요" required></textarea>
          </div>
        </form>

        <Button variant="contained" color="success" onClick={addNewWord}>추가하기</Button>
      </InputContainer>

      {/* 백 버튼 클릭 시 메인 페이지로 이동 */}
      {/* <div
        onClick={() => {
          history.push("/");
        }}
      /> */}
    </div>
  );
};


const InputContainer = styled.main`
  width:450px;
  margin: auto;
  padding: 30px 30px;
  font-family: 'Pretendard-Regular';

  label {
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  h3 {
    font-size: 30px;
  }

  textarea::placeholder {
    font-family: 'Pretendard-Regular';
    color: '#ddd'
  }

  button {
    width: 110px;
    height: 50px;
    font-size: 15px;
    display: block;
    margin : 50px auto;
  }


`

export default New;