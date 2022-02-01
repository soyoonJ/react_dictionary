/* eslint-disable array-callback-return */
import React from "react";

import { useHistory } from "react-router-dom";
// import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, deleteCardFB } from "./redux/modules/dictionary";
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
                            {/* 클릭하면 수정 창으로 이동 -> 주소창 끝에 id값 달아주기 */}
                            <FaPencilAlt style={{margin:"0px 10px"}} onClick={()=>{
                                history.push('/update/' + my_words[i].id);
                            }}/>
                            {/* 클릭하면 삭제 -> 삭제하려는 아이디값 보내줌 */}
                            <FaRegTrashAlt onClick={()=>{
                                dispatch(deleteCardFB(my_words[i].id));
                                
                            }}/></span>
                    </h3>
                    <hr style={{
                        border:"1px solid #eee"
                    }}/>    
                    
                    <p>{el.description}</p>
                    {/* 과제 필수 포함사항: 예문은 blue로!! */}
                    <p style={{ color: "blue" }}>{el.example}</p>
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