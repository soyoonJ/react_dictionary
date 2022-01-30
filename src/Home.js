/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadCardsFB } from "./redux/modules/dictionary";
// import thunk from "redux-thunk";


const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const my_words = useSelector((state)=> state.dictionary.list);

    console.log(my_words)

    React.useEffect( () => {
        dispatch(loadCardsFB());
    }, []);



    return (
        <div>
            <article className="cardbox">
            {my_words.map((el,i) => {
                return (
                  <Container key={i}>
                    <h3>{el.word}</h3>
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

& > :hover {
    
}

& > h3 {
    font-size: 30px;
    color: #44470B;
}

& > p {
    font-family: 'Pretendard-Regular';
}


`




export default Home;