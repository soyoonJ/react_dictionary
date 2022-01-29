// widgets.js

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

// 초기 상태값을 만들어줍니다.
const initialState = {
    word:"단어입니다", description:"설명입니다설명입니다줄글줄글", example:"예시입니다예시입니다"
};

// Action Creators
export function loadCards(card) {
  return { type: LOAD, card };
}

export function createCard(card) {
  return { type: CREATE, card };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD":
        return state;
    
    // case "dictionary/CREATE":
        

    default:
      return state;
  }
}
