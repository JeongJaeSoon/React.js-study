import React, { Component } from "react";

import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

/* 1. Component(정리의 도구!) 생성하기 */

/*
- App.js 는 유사 자바 스크립트!!!
    : 자바스크립트가 아니다
    : JSX 가 자바스크립트 코드로 컨버팅을 해준다!

- 속성(attr)을 이용하면 같은 태그에도 다양한 값을 사용할 수 있다
    : React 에서는 props!
*/

/* 2. State 사용*/
/*
- 컴포넌트가 생성될 때, render() 보다 먼저 실행되면서 컴포넌트를 초기화
    : 생성자를 이용(constructor())
    : 객체 형태로 초기화 값을 지정
- Component 에 props 이름={state 이름} 으로 사용
    : {this.state.~~~.~~~}

- State : 부모 입장에서 내부적으로 data 를 사용
- Props : 자식에게 data 를 전달
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                title: "Web",
                sub: "Wrold Wide Web!",
            },
            contents: [
                {
                    id: 1,
                    title: "HTML",
                    desc: "HTML is for information",
                },
                {
                    id: 2,
                    title: "CSS",
                    desc: "CSS is for design",
                },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                ></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Markup Language."
                ></Content>
            </div>
        );
    }
}

export default App;
