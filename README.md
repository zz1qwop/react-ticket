## 티켓 구매 사이트
React로 티켓 구매 사이트를 만들었습니다.
firebase 인증, 실시간 데이터베이스를 사용했습니다.

## 기능
#### 1. 로그인, 회원가입
![로그인](https://github.com/zz1qwop/react-ticket/assets/84325395/fa3e8ea3-ed2e-4456-8e6d-547aa82f95f9)
![로그인 회원가입 전환](https://github.com/zz1qwop/react-ticket/assets/84325395/72bb4c43-74fe-4790-9e54-02915aaf3952) <br />
하단의 버튼을 눌러 로그인, 회원가입 전환이 가능합니다.<br />
이메일과 비밀번호를 사용하는 인증 방식입니다.

<img src="https://github.com/zz1qwop/react-ticket/assets/84325395/90801477-8430-4be7-ac94-e3f79e8fde1d" width="800" />
<img src="https://github.com/zz1qwop/react-ticket/assets/84325395/aa12d3c2-fdc6-4e5b-81d9-9650c3cb30df" width="800" /> <br />
로그인, 회원가입 오류 시에는 버튼 위에 오류 메세지가 뜹니다.


#### 2. 공연 목록 보기
![공연 목록 - 짧게](https://github.com/zz1qwop/react-ticket/assets/84325395/63453ece-98f7-4507-bf5b-403a6c739442) <br />
공연 목록은 [react-slick](https://react-slick.neostack.com/)을 이용했습니다. 화살표를 눌러 목록을 볼 수 있습니다.

#### 3. 티켓 예매하기
![티켓 구매](https://github.com/zz1qwop/react-ticket/assets/84325395/878c5b87-f00d-4035-aba3-54185bc29663) <br />
이미 예매된 좌석은 회색 표시가 되어있고, 좌석을 선택해야만 다음 페이지로 넘어갈 수 있습니다.<br />
결제 후 (해당 프로젝트에서는 실제 결제 과정이 없습니다.) 구매한 티켓을 볼 수 있는 페이지로 넘어갑니다.

#### 4. 구매한 티켓 목록 보기 및 예매 취소하기
![예매 취소](https://github.com/zz1qwop/react-ticket/assets/84325395/557d52c1-4d40-406b-9740-6abcbbd24a07) <br />
헤더의 오른쪽에 있는 티켓 아이콘을 눌러 이동할 수 있습니다.<br />
구매한 티켓들의 정보를 볼 수 있으며, 예매 취소도 가능합니다.

#### 5. 로그아웃
![로그아웃](https://github.com/zz1qwop/react-ticket/assets/84325395/d2a6a1f3-bd77-4d0f-b077-66eebbf8cdbc) <br />
헤더의 버튼을 눌러 로그아웃을 할 수 있습니다.

#### 6. 반응형 CSS
![모바일1](https://github.com/zz1qwop/react-ticket/assets/84325395/886dc367-4278-488a-9fae-9ce0c6dd2801)
![모바일2](https://github.com/zz1qwop/react-ticket/assets/84325395/9095f05d-9ed6-4c4f-af40-0483cc6c2f4f)

<hr>

자세한 내용은 [블로그](https://velog.io/@zz1qwop/React-%ED%8B%B0%EC%BC%93-%EA%B5%AC%EB%A7%A4-%EC%82%AC%EC%9D%B4%ED%8A%B8)에서 볼 수 있습니다.
