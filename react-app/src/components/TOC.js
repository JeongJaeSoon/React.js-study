import React, { Component } from "react";

// Table Of Content(TOC)
class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="1.html">HTML</a>
                    </li>
                    <li>
                        <a href="2.html">CSS</a>
                    </li>
                    <li>
                        <a href="3.html">JavaScript</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

// 외부에서 TOC.js 를 통해 TOC class 를 사용할 수 있게 함
export default TOC;
