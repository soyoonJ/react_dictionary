# 나만의 단어장 만들기_React 개인과제
## :link:[기억삭제방지 단어장 보러가기](http://dictionaryreact.s3-website.ap-northeast-2.amazonaws.com/)
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

##  :closed_book: Requirement
### 페이지 구현
  * 게시글 목록 페이지   
    게시글 목록을 화면에 그리기 (각각 뷰는 카드 뷰로 만들기)
    게시글 내의 예시는 파란 글씨로 보여주기
    게시글 목록을 리덕스에서 관리하기
    게시글 목록을 파이어스토어에서 가져오기
  * 게시글 작성 페이지
    게시글 작성에 필요한 input 3개를 ref로 관리하기
    작성한 게시글을 리덕스 내 게시글 목록에 추가하기
    게시글 목록을 파이어스토어에 저장하기
### S3 배포

<br>

## :orange_book: 구현페이지

### 1. 메인페이지 / 추가페이지 

https://user-images.githubusercontent.com/96245651/152043725-ce0e0143-5850-486f-83a0-aa45d85ba3e6.mp4

   
### 2. NotFound 페이지

https://user-images.githubusercontent.com/96245651/152043889-fb7be61b-e366-4f1b-bcdc-60ac9e6e9630.mp4


<br>

## :ledger: 추가기능 구현
  * 카드 overflow 스크롤 설정
  * 단어 추가 시 textarea 줄바꿈 반영
  * 신규카드 등록 시 미입력 값 있을 경우 작성 요청 팝업창
  * 카드 수정기능 + 수정페이지 default-value 노출 + 수정완료 팝업
  * 카드 삭제기능 + 정말로 삭제하시겠습니까? 확인창
  * NotFound 페이지 추가

## :green_book: 에러 해결
  * 게시물 수정 페이지 새로고침 시 에러문제 해결 - useParams > Link 
  * 아이콘 정렬문제 - flexbox
  * 정말로 삭제하시겠습니까? confirm - 삼항연산자 &&로 조건문 두개 생성
  * '+'버튼 rotate 적용 - 플러스버튼의 특성 상 transition 적용 이전에는 가시화되지 않음
  * textarea value 적용 시 값 수정 불가. defaultValue 활용 필요
