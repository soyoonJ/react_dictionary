/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
// import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { loadCardsFB, deleteCard, deleteCardFB } from "./redux/modules/dictionary";
// import thunk from "redux-thunk";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const my_words = useSelector((state)=> state.dictionary.list);


    return (
        <div>
            <article className="cardbox">
            {my_words.map((el,i) => {
                return (
                  <div className="container" key={i}>
                    <h3>{el.word}
                        <span>
                            <FaPencilAlt style={{margin:"0px 10px"}} onClick={()=>{
                                history.push('/update/' + my_words[i].id);
                            }}/>
                            <FaRegTrashAlt onClick={()=>{
                                dispatch(deleteCardFB(my_words[i].id));
                            }}/></span>
                    </h3>
                    <hr style={{
                        border:"1px solid #eee"
                    }}/>    
                    
                    <p>{el.description}</p>
                    <p style={{ color: "blue" }}>{el.example}</p>
                  </div>
                );
                
            })}
            </article>
        
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