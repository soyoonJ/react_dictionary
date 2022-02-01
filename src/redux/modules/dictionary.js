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
const UPDATE = "dictionary/UPDATE";

// 초기 상태값을 만들어줍니다.
const initialState = {
    // list:[{word:"단어입니다", description:"설명입니다설명입니다줄글줄글", example:"예시입니다예시입니다"}]
    // 테스트 위해 list 초기값 있었으나, 테스트 완료했고 값 다 불러왔기 때문에 빈 배열로 남겨둠
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

export function updateCard(id, words, descriptions, examples){
  return {type: UPDATE, id, words, descriptions, examples};
}

// 미들웨어
//  - load: getDocs -> list 업데이트
//  - create: addDoc -> getDoc -> list 업데이트
//  - update:
//  - delete: 
export const loadCardsFB = () => {
  // redux-thunk는 함수를 리턴한다.
  return async function (dispatch) {
    // dictionary라는 db 컬렉션의 데이터 불러오기
    // getDocs를 통해 한 컬렉션에 있는 데이터 다 불러올 수 있음
    // async, await 안 쓰면 promise로만 나옴! 비동기이기 때문에 await 꼭 써줘야 함
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    
    let dictionary_list  = [];
    
    dictionary_data.forEach((b) => {

      // console.log(b.id, b.data());
      // 전체 리스트 요소 각각에 id번호 및 속해있는 데이터를 키:밸류 값으로 빈 배열에 넣어주기
      // b.data 쓰는 이유 : 그냥 b를 출력하면 가공하기 어려운 상태로 나옴. 때문에 .data 써야 객체 타입으로 깔끔하게 출력됨
      dictionary_list.push({ id: b.id, ...b.data() });
    });

    // console.log(dictionary_list);
    // loadCards에 dictionary_list 붙여주기
    dispatch(loadCards(dictionary_list));
  }
}

export const createCardFB = (card) => {
  return async function (dispatch) {
    // addDoc(collection(정보), 추가하려는 내용);
    const docRef = await addDoc(collection(db, "dictionary"), card);
    // docRef에서 정보 가져오기 위해 getDoc 씀
    // load와 다르게 getDocs가 아닌 getDoc 쓰는 이유는, 하나를 부르기 때문
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
    // 어떤 데이터 삭제할건지 id 기준으로 컬렉션에서 선택하기
    const docRef = doc(db, "dictionary", card_id);
    // 선택한 id 기준으로 doc에서 데이터 삭제하기
    await deleteDoc(docRef);

    const _card_list = getState().dictionary.list;
		// findIndex로 몇 번째에 있는 지 찾기!
    const card_index = _card_list.findIndex((b) => {
      // getState 해서 index 값들 중에 받아 온 index 값이랑 같은 index 뽑아내기
      return b.id === card_id;
    });
    // 리덕스에도 삭제 필요하기 때문에 값 같이 보내줘야 함
    dispatch(deleteCard(card_index));
  }

}

// update에 필요한 id값과 수정할 데이터들을 받아온다
export const updateCardFB = (id, newData) => {
  return async function (dispatch) {
    // doc(콜렉션 정보, 어떤 걸 수정해줄 지 값 가져오기)
    const docRef = doc(db, "dictionary", id);
    // 어떤 걸 어떻게 수정해줄지! -> id랑 같이 묶인 데이터를 ...newData로 수정
    // ...newData 부분에는 수정할 내용만 들어가도 무관! ex) {completed:false}
    // 안에 있는 내용을 꺼내주기 위해 스프레드 문법 사용
    await updateDoc(docRef, {...newData})
    // 리덕스에도 값 업데이트 해주기!
    // updateCard가 받는 파라미터(업데이트 할 값)를 동일하게 넘겨준다.
    dispatch(updateCard(id, newData.word, newData.description, newData.example));
    // 업데이트 완료되면 메인 페이지로 돌아가기
    window.location.replace('/');
    };

  };




// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    
    // action 함수가 가지고 있는 card를 list에 넣어줌
    case "dictionary/LOAD": {
      return {list:action.card};
    }

    
    case "dictionary/CREATE": {
      // state.list에 action.card를 넣어줌 -> 넣은 새 값을 list에 넣어줌
      const new_word_list = [...state.list, action.card];
      return { list: new_word_list };
    }

    // state의 list에서 action 함수가 가지고 있는 card_index랑 다른 것만 묶어서 새 배열로 만들어줌
    case "dictionary/DELETE": {
      console.log(state, action);
      const new_word_list = state.list.filter((e,i) => {
        // 자료형 맞춰주기 위해 parseInt로 맞춰서 비교
        return parseInt(action.card_index) !== i;
      });
      
      // 삭제할 항목만 빼고 새롭게 만든 new_word_list를 list로 반환해줌
      return {list: new_word_list};

    }

    
    case "dictionary/UPDATE": {
      // state.list를 가져온 데이터로 업데이트
      const new_word_list = [...state.list, action.id, action.words, action.descriptions, action.examples];
      return { list: new_word_list };
    }


    default:
      return state;
  }
}
