import Router from "./Router";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import { ReactQueryDevtools } from 'react-query/devtools'
import {darkTheme, LightTheme} from "./theme";
import {useState} from "react";

// 글로벌 스타일을 지정(이하의 CSS 가 모든 페이지에 적용된다.)
// 모든 css 의 기본값을 제거하기 위해 reset css 를 적용하였다. (구글링 reset css 검색)
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  // 만약 상단에서 @import 가 실패하면 이하의 글꼴을 적용한다.
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
  
  // Link 태그는 결국 HTML 에서 a 태그로 바뀌므로 이곳에서 CSS 를 설정한다.
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.detailBoxColor};
  margin: 20px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.detailBoxColor};
  box-shadow: 6px 7px 15px darkslategrey;
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

function App() {
    const [isDark, setIsDark] = useState(false);
    const toggleDark = () => {
        setIsDark(current => !current);
    }

    return (
        <ThemeProvider theme={isDark ? darkTheme : LightTheme}>
            <Button onClick={toggleDark}>{isDark ? "Light Theme" : "Dark Theme"}</Button>
            <GlobalStyle/>
            <Router/>
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    );
}

export default App;
