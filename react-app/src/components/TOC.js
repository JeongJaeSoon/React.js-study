import React, { Component } from "react";

/*
- 상위 컴포턴트에서  props 를 전달 받고 this.props.~~~ 로 사용
- 각각 리스트의 항목들은 key 라고 하는 props 를 가져야 함
    : React 가 내부적으로 동작할 때 사용
    : key={data[i].id}
*/

// Table Of Content(TOC)
class TOC extends Component {
    render() {
        console.log("TOC render");

        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={`/content/data[i].id`}
                        data-id={data[i].id}
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >
                        {data[i].title}
                    </a>
                </li>
            );
            i++;
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

// 외부에서 TOC.js 를 통해 TOC class 를 사용할 수 있게 함
export default TOC;
