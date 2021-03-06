import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import App from './App';
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

const queryClient = new QueryClient();

ReactDOM.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={darkTheme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </RecoilRoot>,
    document.getElementById('root')
);
