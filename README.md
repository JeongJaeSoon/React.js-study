# React_Study

My first React

<br>

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

    가급적 npx 를 사용하여 최신버전을 설치하고 활용

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
                document.getElementById('root')
            );
            ```
        -   `App.js` : 컴포넌트가 작성되어 있음
            1. function type
                ```js
                import React from 'react';
                import './App.css';

                function App() {
                    return (
                        <div className = "App">
                        </div>
                    );
                }

                export default App;
                ```
            2. class type
                ```js
                import React, { Component } from 'react';
                import './App.css';

                class App extends Component {
                    render() {
                        return (
                            <div className = "App">
                                <h1>Hello, React!!!</h1>
                            </div>
                        );
                    }
                }

                export default App;
                ```
        -   컴포넌트는 반드시 하나의 태그 안에 있어야 함