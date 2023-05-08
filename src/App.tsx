import React, { ReactNode, useEffect, useState } from "react";
import "./App.css";
import Sub from "./components/Sub";

export interface UserInfo {
    //외부에서도 접근하게 할려고 export 시킴 = 아니면 따로 타입 파일을 만들어서 해두 됨
    //props로 전달받을 값 타입정의
    name: string;
    age: number;
    company?:string;
    //optional?: string; // 선택적인 경우
    //onClick: (name: string) => void; // 함수를 props로 받을 경우
}

export interface AppState {
    children: ReactNode; //React elements, primitives, portals, fragments 모든것을 허용
    //https://itchallenger.tistory.com/entry/React-children-with-typescript-%EB%A6%AC%EC%95%A1%ED%8A%B8-children-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91
}

function App({ name, age, company="home2" }: UserInfo) { //기본값이 있다면 company처럼 지정할 수 있다.
    /*
        static defaultType={ //아무것도 적지않으면 기본값이 뜸
            company: '클래스회사' //함수형에서는 더이상 쓰지말라고 경고함..!!
        }
    */
    //props와 타입 넣어주기
    //state 쓰기
    /*
      🙄클래스 타입이라면
      
      public state: { age: number} = {   //함수형의 state 
       age: 20  //초기값 세팅
      };

      setInterval(()=>{ 
        this.setState({ //함수형의 setState 
            age:this.state.age + 1
        })
      }, 2000)
      
      또는 
      
      constructor(props: UserInfo}) {
      super(props: UserInfo});
       this.state = { //초기세팅
            age: 20 
       };
      }; 

      //super는 부모 클래스 생성자를 가리킨다(리액트에서는 React.Component)
      //super 선언하는 이유 - super 키워드 실행 후 this를 사용할 수 있다. 
      그 이전에 this를 불러오게되면 변경되지 않은값(초기화 되기 이전값)만 보게 된다.(계속 같은 코드가 보임)
      
      //props가 있을때 super안에 super(props)를 쓰는 이유 - super()로 쓰게 되면 constructor에서 super()가 불려진 이후에도 this.props는 undefined가 된다.
     */

    const [state, setState] = useState<UserInfo>({ name, age: 20 }); //초기값 세팅

    function ageUp() {
        setState({
            name,
            age: state.age + 1,
        });
    }

    useEffect(() => {
        console.log('랜더링과 업데이트시 실행'); //componentDidMount,componentDidUpdate = 랜더링 또는 업데이트하자마자 실행
        return function(){
            console.log('마운트될때 실행 사라질때 실행'); //업데이트 될때 return이 실행
        }
    },[state.age]); //의존성 배열에 변수를 넣으면 그 변수가 업데이트 될때마다 실행(props나 state등)

    useEffect(() => {
        console.log("빈배열을 1번만 실행하지!");
    }, []);

    return (
        <div className="App">
            Hello, {name} {state.age} 
            {/* name은 props로 가져온값 뒤에는 state로 정의한값 */}
            {/* {this.props.company} = 클래스방식 */}
            <button onClick={ageUp}>클릭</button>
            <Sub>
                나는 children {company}
                {/* 보통 ul li등 자식의 갯수를 알 수 없을 경우 사용한다! map으로 정의하구 Sub 컴포넌트에서 children을 props로 받아 사용한다. */}
            </Sub>
        </div>
    );
}

export default App;
