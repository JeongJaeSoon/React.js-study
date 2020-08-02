# React_Study

My first React

<br>

## 목차

[1. React 소개](#React-소개)

[2. 개발환경 구축](#개발환경-구축)

[3. React Syntax](#React-Syntax)

[4. Redux](#Redux)

## React 소개

-   컴포넌트를 사용 : 사용자가 태그(화면의 요소)를 정의해서 만들어 사용 -> Component

```
<html>
    <body>
        <Top></Top>
        <Sidebar></Sidebar>
    </body>
</html>
```

1. 가독성
2. 재사용성
3. 유지보수

<br>

## 개발환경 구축

### React Getting Started

-   React : https://reactjs.org/docs/getting-started.html

-   Try React

    -   Online Playgrounds : 온라인 상에서 필요한 환경을 제공
        (https://codepen.io/pen?&editable=true&editors=0010)
    -   Add React to a Website : React 의 일부 요소만 사용, 초보자가 개발환경 구축에 어려움이 있음
    -   Create a New React App : React 에 필요한 것을 모아서 한번에 제공하는 툴 체인을 사용

-   Create a New React App

    -   Create React App
        : https://github.com/facebook/create-react-app
    -   npm(node package module) 을 이용하여 환경을 구축

-   node.js 와 npm 설치 확인

    ```sh
    npm -v
    6.14.4
    ```

*   React 설치 및 설치 확인

    ```sh
    npm install -g create-react-app
    create-react-app
    ```

    가급적 npx 를 사용하여 최신버전을 설치하고 활용 -> 한번만 실행

*   React 프로젝트 생성

    ```sh
    mkdir react-app
    cd react-app
    create-react-app .
    ```

*   React 프로젝트 실행

    ```sh
    npm run start
    ```

    **localhost:3000** 으로 접속

*   React 디렉터리 구조

    -   public/index.html
        -   메인페이지 역할
        -   `<div id="root"></div>` 에 컴포넌트가 삽입됨
    -   src

        -   대부분의 파일들이 저장됨
        -   `index.js` : 진입(Entry) 파일
            ```js
            ReactDOM.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>,
                document.getElementById("root"),
            );
            ```
        -   `App.js` : 컴포넌트가 작성되어 있음

            1. function type

                ```js
                import React from "react";
                import "./App.css";

                function App() {
                    return <div className="App"></div>;
                }

                export default App;
                ```

            2. class type

                ```js
                import React, { Component } from "react";
                import "./App.css";

                class App extends Component {
                    render() {
                        return (
                            <div className="App">
                                <h1>Hello, React!!!</h1>
                            </div>
                        );
                    }
                }

                export default App;
                ```

        -   컴포넌트는 반드시 하나의 태그 안에 있어야 함
        -   `index.css`, `App.js` : 컴포넌트에 css 를 설정

*   React 배포

    -   Production mode application 을 만들 때 build 를 진행

        ```sh
        npm run build
        ```

        -   개발한 코드들을 통해, `/build` 디렉터리를 생성

        -   `index.html` 에 불필요한 내용(개발환경에 필요했던 것들)을 제거하고 웹에 필요한 내용만 적용

    -   npm server 프로그램 설치

        ```sh
        npm install -g serve
        ```

    -   document root 디렉터리를 지정하여 서버를 실행(옵션 : -s, 디렉터리 : /build)
        ```sh
        serve -s build
        ```

<br>

## React Syntax

### Component

-   컴포넌트 생성, props, 컴포넌트 파일로 관리(components)하기
-   Components 를 상속 받아 내가 필요로 하는 컴포넌트 정의 -> class
-   props 를 통해, 컴포넌트에서 다양한 값들을 사용
-   ~/components/ 디렉터리에서 컴포넌트를 파일별로 관리
    (import, export -> App.js import)

### State

-   State 정의 및 사용, Props 전달 및 사용, 항목에 대한 key props 정의
-   Props : 생성한 컴포넌트를 기본적으로 사용자가 외부에서 조작하고 보여주는 것
    ```html
    <Component props_name="props_value"
    ```
-   State : 사용자는 모르게 Props 에 따라 컴포넌트 내부에서 실제로 구현하는 것, 외부에서 알 필요가 없는 정보를 은닉

    -> Props 와 State 는 분리되어 있다.

### event

-   이벤트 설치 및 state 변경
-   이벤트 bind(), setState() 함수
-   컴포넌트에 이벤트 만들기

### shouldComponentUpdate()

-   `render()` 이전에 실행됨
-   `shouldComponentUpdate()` 의 return 값에 따라 `render()` 함수의 실행 여부가 결정

    ```javascript
    shouldComponentUpdate(){
        return false;     // render() 미실행 -> Component 가 변경되지 않음
        return true;      // render() 실행   -> Component 가 변경
    }
    ```

*   **newProps.data** 와 **this.props.data** 를 비교하여, `render()` 실행여부 결정
    (불필요한 `render()` 의 실행을 막음 -> 성능 향상)

    ```javascript
    shouldComponentUpdate(newProps, newState){
        console.log(newProps.data)        // 새롭게 변경되는 props
        console.log(this.props.data)      // 기존에 사용하던 props

        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    ```

### 배열과 객체의 복제

-   배열의 복제

    ```javascript
    var a = [1, 2, 3];
    var b = Array.from(a);
    ```

-   객체의 복제

    ```javascript
    var a = { name: "Hong Gill Dong" };
    var b = Object.assign({}, a);
    console.log(a, b, a === b); // a 와 b 는 각각 다른 객체
    ```

## Redux

<img width="1761" alt="KakaoTalk_Photo_2020-07-31-04-26-58" src="https://user-images.githubusercontent.com/53788601/88965717-1e3f5700-d2e6-11ea-9374-f1a086ca5045.png">

### state 와 render 의 관계

-   store : Redux 의 핵심, 정보가 저장되는 곳

    -   state : 실제 정보가 저장, 직접 접속이 불가능, 다른 것을 통해서 접근
    -   reducer : reducer() 를 사용하여 Redux 에 값을 저장, 생성(??)

        ```javascript
        function reducer(oldState, action) {
            // ...
        }

        var store = Redux.createStore(reducer);
        ```

    -   dispatch : action 이 dispatch 에 전달됨

        ```javascript
        <form onsubmit="
          // ...
          store.dispatch({
            type: "create",
            payloade: {
              title: title,
              desc: desc
            }
          });
        ">
        ```

        1. reducer 를 통해 state 를 변경(현재 state, 객체의 값)
            ```javascript
            function reducer(state, action) {
                if (action.type === "create") {
                    var newContents = oldStae.contents.concat();
                    var newMaxId = oldState.maxId + 1;
                    newContents.push({
                        id: newMaxId,
                        title: action.payload.title,
                        desc: action.payload.desc,
                    });
                    return Object.assign({}, state, {
                        contents: newContents,
                        maxId: newMaxId,
                        mode: "read",
                        selectedId: newMaxId,
                    });
                }
            }
            ```
        2. subscribe 를 통해 render 를 호출

    -   subscribe : state 값이 바뀔 때마다, render 함수를 호출
        ```javascript
        store.subscribe(render);
        ```
    -   getState : render 가 getState 를 통해 state 의 값에 접근 / 전달
        ```javascript
        function render() {
            var state = store.getState();
            // ...
            document.querySelector("#app").innerHTML = `
            <h1>WEB</h1>
            ...
          `;
        }
        ```

-   render : Redux 와 관련 없이, 사용자가 작성하는 코드 / UI 를 작성 -> 화면 갱신

### Getting Started with Redux

-   npm install
    ```sh
    npm install --save redux
    ```
-   CDN : https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js

### Redux 의 적용

1. store 생성

    ```javascript
    // reducer 은 state 와 action 을 매개변수로 전달받음
    function reducer(state, action) {
        // reducer 로 "초기 state 의 값"을 만들어 줌
        if (state === undefined) {
            return {
                color: "yellow",
            };
        }
    }
    var store = Redux.createStore(reducer);
    console.log(store.getState());

    function red() {
        var state = store.getState();
        document.querySelector("#red").innerHTML = `
       <div class="container" id="component_red" style="background-color:${state.color}">
         <h1>red</h1>
         <input type="button" value="fire" onclick= "
           document.querySelector('#component_red').style.backgroundColor = 'red';
         "/>
       </div>
     `;
    }
    red();
    ```

2. reducer 와 action 을 이용해서 새로운 state 값 만들기

    - store.dispatch() 를 실행 시, reducer() 가 실행되고, 매개변수로 action 이 전달

        ```HTML
        <input
          type="button"
          value="fire"
          onclick= "
            store.dispatch({
              type: 'CHANGE_COLOR',
              color: 'red'
            }
          );"
        />
        ```

        ```javascript
        function reducer(state, action) {
            console.log(state, action);
        }
        ```

    - reducer 로 state 값을 변경

        ```javascript
        function reducer(state, action) {
            if (state === undefined) {
                return {
                    color: "yellow",
                };
            }

            // state 변경
            var newState;
            if (action.type === "CHANGE_COLOR") {
                newState = Object.assign({}, state, { color: "red" });
            }
            return newState;
        }
        ```

3. state 의 변화에 따라서 UI 반영

    - subscribe() 에 red 함수를 등록 -> state 의 변화를 감지하고 적용

        ```javascript
        store.subscribe(red);
        ```
