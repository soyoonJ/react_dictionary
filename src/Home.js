/* eslint-disable array-callback-return */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {db} from "./firebase"
import { collection, getDoc, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadCardsFB } from "./redux/modules/dictionary";
// import thunk from "redux-thunk";

import styled from "styled-components";

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
            {my_words.map((el,i) => {
                return (
                  <div className="container" key={i}>
                    <h3>{el.word}</h3>
                    <p>{el.description}</p>
                    <p style={{ color: "blue" }}>{el.example}</p>
                  </div>
                );
                
            })}
        
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




export default Home;