import React from "react";
import styled from "styled-components";
// import {useHistory } from "react-router-dom"
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCard, createCardFB, updateCard, updateCardFB } from "./redux/modules/dictionary";

import Button from '@mui/material/Button';

// import styled from "styled-components";
import './Style.css';


const Update = (props) => {

  const history = useHistory();
  const word_id = useParams();
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);

  const toUpdate = useSelector((state)=> state.dictionary.list.filter(e=>e.id == word_id.word_id));

  const updateWord = () => {
    dispatch(updateCardFB(word_id.word_id, {word:word.current.value, description:description.current.value, example:example.current.value}));
    window.location.replace('/');
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
            <textarea id="words" className="textarea" defaultValue={toUpdate[0].word} ref={word} placeholder="수정할 단어를 입력해주세요" required>
            </textarea>
          </div>

          <div className="input-box">
            <label htmlFor="descriptions" style={{ textAlign: "left" }}>
              뜻
            </label>
            <textarea id="descriptions" className="textarea" defaultValue={toUpdate[0].description}
            style={{
                height:"70px"
              }}
            rows="5" ref={description} placeholder="수정할 뜻을 입력해주세요" required></textarea>
          </div>

          <div className="input-box">
            <label htmlFor="examples" style={{ textAlign: "left" }}>
              예문
            </label>
            <textarea id="examples" className="textarea" defaultValue={toUpdate[0].example}
            style={{
                height:"70px"
              }}
            rows="5" ref={example} placeholder="수정할 예시문장을 입력해주세요" required></textarea>
          </div>
        </form>
        
            

        <Button variant="contained" color="success"
        onClick={updateWord}
            // dispatch(updateCard(word.current.value, description.current.value, example.current.value));
            // dispatch(updateCardFB(word_id.word_id, word.current.value, description.current.value, example.current.value));

            // history.goBack();
            // dispatch(updateCard())
        >수정하기</Button>
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

export default Update;