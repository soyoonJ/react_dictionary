// 스토어 만들기 전체 작업
// import 하기
import {createStore, combineReducers} from "redux"
import bucket from "./modules/bucket"

// root 리듀서를 만들어준다
// root 리듀서란? 리듀서를 뭉친 것!
// 만약에 리듀서가 여러개라면 {bucket, bucket22} 이런 식으로 이어나가면 됨. (import도 하나 더 하는 것은 당연!)
const rootReducer = combineReducers({bucket})

// rootReducer를 가지고 스토어 만들기
const store = createStore(rootReducer);

export default store;