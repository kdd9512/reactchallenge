import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import {Theme} from "./theme"; // theme.ts 에서 export 된 Theme 를 import
import {QueryClient, QueryClientProvider} from "react-query";
import App from './App';

const queryClient = new QueryClient()

ReactDOM.render(
    // ThemeProvider 를 이용하여 styled-components 에서 이용할 수 있는 props 를 전달,
    // 해당 props 를 이용하여 css 를 바꾸게 만들 수 있다.
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
            <App/>
        </ThemeProvider>
    </QueryClientProvider>,
    document.getElementById('root')
);
