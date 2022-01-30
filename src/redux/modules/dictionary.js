// widgets.js
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from "../../firebase";


// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

// 초기 상태값을 만들어줍니다.
const initialState = {
    list:[{word:"단어입니다", description:"설명입니다설명입니다줄글줄글", example:"예시입니다예시입니다"}]
};

// Action Creators
export function loadCards(card) {
  return { type: LOAD, card };
}

export function createCard(card) {
  return { type: CREATE, card };
}

// 미들웨어
export const loadCardsFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    
    let dictionary_list  = [];
    
    dictionary_data.forEach((b) => {

      // console.log(b.id, b.data());
      dictionary_list.push({ id: b.id, ...b.data() });
    });

    // console.log(dictionary_list);
    dispatch(loadCards(dictionary_list));
  }
}

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), card);
    const _dictionary = await getDoc(docRef);
    const dictionary = {id: _dictionary.id, ..._dictionary.data()};

    dispatch(createCard(dictionary));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    // case "dictionary/LOAD": {
    //   return {list:action.my_words};
    // }
    // 파이어베이스
    case "dictionary/LOAD": {
      return {list:action.card};
    }

    
    case "dictionary/CREATE": {
      const new_word_list = [...state.list, action.card];
      return { list: new_word_list };
    }

    default:
      return state;
  }
}
