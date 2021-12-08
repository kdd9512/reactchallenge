import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import App from './App';
import {DarkMod} from "./theme"; // theme.ts 에서 export 된 DarkMod 를 import



ReactDOM.render(
    // ThemeProvider 를 이용하여 styled-components 에서 이용할 수 있는 props 를 전달,
    // 해당 props 를 이용하여 css 를 바꾸게 만들 수 있다.
    <ThemeProvider theme={DarkMod}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);
