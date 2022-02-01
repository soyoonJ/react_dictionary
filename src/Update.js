import React from "react";
import styled from "styled-components";
// import {useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCard, createCardFB, updateCard, updateCardFB } from "./redux/modules/dictionary";

import Button from '@mui/material/Button';

// import styled from "styled-components";
import './Style.css';


const Update = (props) => {

  const location = useLocation();
  // const word_id = useParams();
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const description = React.useRef(null);
  const example = React.useRef(null);

  // 주소값의 id와 같은 id를 가진 state 가져오기
  // 하나를 가져오기 때문에 인덱스는 0으로 동일하므로, 아래에서 활용
  // const toUpdate = useSelector((state)=> state.dictionary.list.filter(e=>e.id == word_id.word_id));

  const updateWord = () => {
    // 업데이트 값 전체 넘겨주기
    dispatch(updateCardFB(stateId, {word:word.current.value, description:description.current.value, example:example.current.value}));
    alert('수정완료!');
    window.location.replace('/');
  };

  const stateId = location.state.id;
  const stateWord = location.state.word;
  const stateDescription = location.state.description;
  const stateExample = location.state.example;


  
  return (
    <div>
      <InputContainer>
        <form>
          <div className="input-box">
            <label htmlFor="words" style={{ textAlign: "left" }}>
              단어
            </label>
            {/* 작성했던 내용을 기본으로 깔아주고, 수정할 부분만 반영하기 위해 defaultValue 작성
            defaultValue는 위에서 filter로 걸러냈던 toUpdate의 0번째 인덱스 기준으로 불러옴
            -> word/description/example 다 동일한 형태!! */}
            <textarea id="words" className="textarea" defaultValue={stateWord} ref={word} placeholder="수정할 단어를 입력해주세요" required>
            </textarea>
          </div>

          <div className="input-box">
            <label htmlFor="descriptions" style={{ textAlign: "left" }}>
              뜻
            </label>
            {/* 뜻이랑 예문은 길게 작성하는 경우가 많기 때문에 height를 넓게 잡아줌
            placeholder도 '추가할'에서 '수정할'로 바꿔줌 */}
            <textarea id="descriptions" className="textarea" defaultValue={stateDescription}
            style={{
                height:"70px"
              }}
            rows="5" ref={description} placeholder="수정할 뜻을 입력해주세요" required></textarea>
          </div>

          <div className="input-box">
            <label htmlFor="examples" style={{ textAlign: "left" }}>
              예문
            </label>
            <textarea id="examples" className="textarea" defaultValue={stateExample}
            style={{
                height:"70px"
              }}
            rows="5" ref={example} placeholder="수정할 예시문장을 입력해주세요" required></textarea>
          </div>
        </form>
        
            
        {/* 수정하기 버튼 클릭 시 updateWord 함수 실행하도록!! */}
        <Button variant="contained" color="success"
        onClick={updateWord}
        >수정하기</Button>
      </InputContainer>

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