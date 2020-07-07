import React, { Component } from "react";
// todo
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

/* 1. Component(정리의 도구!) 생성하기 */
/*
* - App.js 는 유사 자바 스크립트!!!
    : 자바스크립트가 아니다
    : JSX 가 자바스크립트 코드로 컨버팅을 해준다!

* - 속성(attr)을 이용하면 같은 태그에도 다양한 값을 사용할 수 있다
    : React 에서는 props!
*/

/* 2. State */
/*
* - 컴포넌트가 생성될 때, render() 보다 먼저 실행되면서 컴포넌트를 초기화
    : 생성자를 이용(constructor())
    : 객체 형태로 초기화 값을 지정
* - Component 에 props 이름={state 이름} 으로 사용
    : {this.state.~~~.~~~}

* - state VS props
    ! - State : 부모 입장에서 내부적으로 data 를 사용
    ! - Props : 자식에게 data 를 전달
*/

/* 3. Event */
/*
* - 동적인 웹 구현
    : 링크에 이벤트를 설치 -> App 컴포넌트의 state 가 변경 -> 컴포넌트의 props 가 변경

* - props 또는 state 값 변경 시, 그 State 를 가지고 있는 render() 함수가 다시 호출
    : 웹 페이지 화면이 다시 그려짐

* - 이벤트 설치하기
    ! - onClick(function() { 실행될 구문을 작성 }) <-- 클릭 이벤트
        <a
            href="/"
            onClick={function (e) {     // param 으로 event 전달
                console.log(e);
                e.preventDefault();
                debugger;               // 개발자 도구에서 소스코드의 실행을 멈추고 Sources 로 이동(디버그)
            }}
        >

    ! - e.preventDefault();
        : a 태그의 기본적인 동작 방식(새로고침) prevent

* - 이벤트에서 state 변경

    ! - bind(this) : 컴포넌트(this) 를 바인딩

    ! - setState({}   ) 로 state 를 변경
        this.setState({
            mode: "welcome",
        });

* - 이벤트에서 bind() 와 setState() 함수

    ? - bind() 예제
        var obj = {name:'test'};
        function bindTest() { console.log(this.name); }
        var bindTest2 = bindTest.bind(obj);
        bindTest2(obj);

    ! - bind(this) 로 이벤트에서 컴포넌트를 주입하고 setState({}) 로 state 를 변경
        : bind 하지 않을 경우 this 로 컴포넌트를 찾을 수 없음 -> undefined
        <a
            href="/"
            onClick={function (e) {
                e.preventDefault(); // --> a 태그의 기본 동작을 prevent
                this.setState({
                    mode: "welcome",
                });
            }.bind(this)}
        >

* - 컴포넌트 이벤트 만들기

    ! - 상위 컴포넌트에서 이벤트를 생성
        <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function () {
            this.setState({ mode: "welcome" });
        ></Subject>
    
    ! - 하위 컴포넌트에서 상위 이벤트를 props로 호출
        <a
            href="/"
            onClick={function (e) {
                e.preventDefault();
                this.props.onChangePage();
            }.bind(this)}
        >

* - e.target.dataset.id
    : 상위 컴포넌트에서 전달한 값을 props 로 접근 가능
    : "data-~~~" 로 시작하는 속성에는 dataset 으로 접근, ~~~ 는 key 값
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "read",
            selected_content_id: 1,
            subject: {
                title: "Web",
                sub: "Wrold Wide Web!",
            },
            welcome: {
                title: "Welcome",
                desc: "Hello, React!!!",
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
        console.log("App render");

        var _title,
            _desc = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i++;
            }
        }

        console.log("render", this); // this 는 컴포턴트 자신을 가르킴

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({
                            mode: "welcome",
                        });
                    }.bind(this)}
                ></Subject>
                <TOC
                    data={this.state.contents}
                    onChangePage={function (id) {
                        console.log(id);
                        this.setState({
                            mode: "read",
                            selected_content_id: Number(id),
                        });
                    }.bind(this)}
                ></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
