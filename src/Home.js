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

    React.useEffect( () => {
        dispatch(loadCardsFB());
    }, []);



    return (
        <div>
            <article className="cardbox">
            {my_words.map((el,i) => {
                return (
                  <Container key={i}>
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
                  </Container>
                );
                
            })}
            </article>
        
        <PlusCircle
            onClick={()=> {
                history.push("/new");
            }}>
                <span className="horiz"></span>
                <span className="vert"></span>
        </PlusCircle>

        </div>
    );

}


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
    box-shadow: 2px 2px 8px 2px #B5BD1C;


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

const Container = styled.div`
border-radius: 10px;
width: 300px;
height: 430px;
overflow: auto;
text-align: left;
padding: 5px 20px 10px 20px;
margin: 20px;
background: white;
box-shadow: 4px 4px 10px 2px #B5BD1C;

& :hover {
    
}

h3 {
    font-size: 30px;
    color: #44470B;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

span {
    color: #44470B;
    font-size: 27px;
    margin-right: 5px;
}

p {
    font-family: 'Pretendard-Regular';
}


`




export default Home;