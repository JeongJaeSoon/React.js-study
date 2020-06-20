import React, { Component } from "react";

import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

/* Component(정리의 도구!) 생성하기 */

/*
- App.js 는 유사 자바 스크립트!!!
    : 자바스크립트가 아니다
    : JSX 가 자바스크립트 코드로 컨버팅을 해준다!

- 속성(attr)을 이용하면 같은 태그에도 다양한 값을 사용할 수 있다
    : React 에서는 props!
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC></TOC>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Markup Language."
                ></Content>
            </div>
        );
    }
}

export default App;
