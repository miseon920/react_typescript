import React, { useState } from "react";
import "./App.css";

export interface UserInfo { //외부에서도 접근하게 할려고 export 시킴 = 아니면 따로 타입 파일을 만들어서 해두 됨
    //props로 전달받을 값 타입정의
    name: string;
    age: number;
    //optional?: string; // 선택적인 경우
    //onClick: (name: string) => void; // 함수를 props로 받을 경우
}

function App({ name, age }: UserInfo) {
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

    return (
        <div className="App">
            Hello, {name} {state.age} 
            {/* name은 props로 가져온값 뒤에는 state로 정의한값 */}
            <button onClick={ageUp}>클릭</button>
        </div>
    );
}

export default App;
