import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import App from './App';

// ThemeProvider 에서 사용할 props 를 전달한다.
// 여기서 설정한 색상이 App의 styled-components 에 전달되어 css 를 결정한다.
const darkMod = {
    textColor:"whitesmoke",
    backgroundColor:"#111",
};

const lightMod = {
    textColor:"#111",
    backgroundColor:"whitesmoke",
};

ReactDOM.render(
    // ThemeProvider 를 이용하여 styled-components 에서 이용할 수 있는 props 를 전달,
    // 해당 props 를 이용하여 css 를 바꾸게 만들 수 있다.
    <ThemeProvider theme={darkMod}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);
