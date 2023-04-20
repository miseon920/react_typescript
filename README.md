## react + typescript

1. npx create-react-app .
2. npm i @types/react
3. 통합적으로 npx create-react-app . --template typescript 설치가능


## .ts파일은 pure typescript 파일

-------------------------------------------------------------


## .tsx는 typescript의 react문법을 담아내기 위한 확장자

1. eject를 사용하는 이유

-   CRA가 숨겨놓은 파일들을 원하는대로 프로젝트에 맞게 커스터마이징 할 때 사용
    > eject의 단점
    > eject는 CRA가 자동으로 해줬던 webpack, babel 등의 설정들을 사용자가 유지보수해야되고,
    > 라이브러리 간의 의존성도 사용자가 신경써야한다.
    > 프로젝트 진행중에 새로운 패키지가 필요해서 설치할 때 다른 패키지와의 의존성을 체크해야한다.
    > webpack, babel 등을 세팅하기 힘들기 때문에 보통 사용하지 않는다.

## src 디렉토리

1.  index.tsx

    >

        1. 메인 엔트리 파일
        2. React.Dom.render 수행
        3. pwa(프로그레시브 웹 앱 = HTML, CSS, JavaScript와 같은 웹 기술로 만드는 앱)를 위한 서비스 워커 등록 작업  

<https://blog.wishket.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1pwa%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80/>

2.  index.css

    >

        1. 글로벌 스타일 작성(프로그래밍적으로 제한되지 않음)

3.  App.tsx

    >

        1. App 컴포넌트(샘플컴포넌트) : 컴포넌트 이름과 파일 이름을 맞추는 것이 관례

4.  App.css

    >

        1. App 컴포넌트에서 쓰이는 스타일(암묵적 합의)

5.  App.test.tsx

    >

        1. App 컴포넌트에 대한 테스트 작성파일

6.  service-workers : pwa 서비스 워커 사용등록

    >

        1. npx create-react-app my-app --template cra-template-pwa
        <https://blog.logrocket.com/pwa-create-react-app-service-workers/>

7.  >   
        
        import React from "react";

        interface 타입명 {
        name: string;
        mark: string;
        optional?: string; // 선택적인 경우
        onClick: (name: string) => void; // 함수를 props로 받을 경우
        }

        function 콤퍼넌트명({name, mark, optional, onClick}: 타입명) {
        return <div>Hello, {name} {mark}</div>;


        export default 콤퍼넌트명;

        

<https://www.freecodecamp.org/korean/news/best-practices-for-react/>
<https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets>


8. props, state

    1. props : 컴포넌트 외부에서 컴포넌트로 넣어주는 데이터(함수도 가능)

    - 컴포넌트 내부에서 props를 수정할 수 없다.
    - 컴포넌트 외부에서 props 데이터를 변경할 경우 render가 다시 호출된다.

    ------------------------------------------------------------------------    

    2. state : 컴포넌트 내부의 데이터

    - 클래스와 프로퍼티는 다름(프로퍼티를 변경해도 render가 호출되지 않음)
    - 생성자 혹은 프로퍼티 초기 할당으로 state 초기값을 할당해 줘야함
    - 내부에서 변경되더라도 setState 함수를 이용해야 render가 호출됨


9. 