/* eslint-disable array-callback-return */
import React from "react";

import { useHistory, Link } from "react-router-dom";
// import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { deleteCardFB } from "./redux/modules/dictionary";
// import thunk from "redux-thunk";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const my_words = useSelector((state)=> state.dictionary.list);

    return (
        <div>
            {/* 카드 그려주기 */}
            <article className="cardbox">
            {my_words.map((el,i) => {
                return (
                  <div className="container" key={i}>
                    <h3>{el.word}
                        <span>
                            <Link
                            to = {{
                                // 값 지정해서 update에 넘겨주기 (리덕스 특성 상 새로고침 시 오류 방지하기 위함)
                                pathname: '/update/' + my_words[i].id,
                                state: { id: my_words[i].id,
                                word: my_words[i].word,
                                description: my_words[i].description,
                                example: my_words[i].example
                                }
                            }}>
                                {/* 클릭하면 수정 창으로 이동 -> 주소창 끝에 id값 달아주기 */}
                                <FaPencilAlt style={{margin:"0px 10px"}} />
                                {/* onClick={()=>{
                                    history.push('/update/' + my_words[i].id);
                                }} */}
                            </Link>

                            {/* 클릭하면 삭제 -> 삭제하려는 아이디값 보내줌 */}
                            <FaRegTrashAlt onClick={()=>{
                                // 정말로 삭제하시겠습니까? 확인 - 삭제, 취소 - 삭제취소됨
                                // 조건 여러개일 경우에 구현하려는 내용에 따라 && or || 로 묶어주고 괄호!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                window.confirm("정말 삭제합니까?")?(dispatch(deleteCardFB(my_words[i].id)) && alert('삭제되었습니다')):alert('취소되었습니다')
                                
                                
                            }}/></span>
                    </h3>
                    <hr style={{
                        border:"1px solid #eee"
                    }}/>    
                    
                    <p>{el.description}</p>
                    {/* 과제 필수 포함사항: 예문은 blue로!! */}
                    <p style={{ color: "blue"}}>{el.example}</p>
                  </div>
                );
                
            })}
            </article>
        
        {/* 플러스 버튼 클릭하면 신규카드 추가할 수 있는 창으로 이동 */}
        <div className="plusCircle"
            onClick={()=> {
                history.push("/new");
            }}>
                <span className="horiz"></span>
                <span className="vert"></span>
        </div>

        </div>
    );

}









export default Home;