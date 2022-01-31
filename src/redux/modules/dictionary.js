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
const DELETE = "dictionary/DELETE";

// 초기 상태값을 만들어줍니다.
const initialState = {
    // list:[{word:"단어입니다", description:"설명입니다설명입니다줄글줄글", example:"예시입니다예시입니다"}]
    list:[]

};

// Action Creators
export function loadCards(card) {
  return { type: LOAD, card };
}

export function createCard(card) {
  return { type: CREATE, card };
}

export function deleteCard(card_index){
  return {type: DELETE, card_index};
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

export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if(!card_id){
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "dictionary", card_id);
    await deleteDoc(docRef);

    const _card_list = getState().dictionary.list;
		// findIndex로 몇 번째에 있는 지 찾기!
    const card_index = _card_list.findIndex((b) => {
			// updateBucketFB의 파라미터로 넘겨받은 아이디와 
			// 아이디가 독같은 요소는 몇 번째에 있는 지 찾아봐요!
      return b.id === card_id;
    });
    dispatch(deleteCard(card_index));
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

    case "dictionary/DELETE": {
      console.log(state, action);
      const new_word_list = state.list.filter((e,i) => {
        return parseInt(action.card_index) !== i;
      });

      return {list: new_word_list};

    }


    default:
      return state;
  }
}
