import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import { ReactQueryDevtools } from 'react-query/devtools'
import {useState} from "react";
import {useRecoilValue} from "recoil";
// import Router from "./Router";
// import {darkTheme, LightTheme} from "./theme";
// import {isDarkAtom} from "./atoms";

// 글로벌 스타일을 지정(이하의 CSS 가 모든 페이지에 적용된다.)
// 모든 css 의 기본값을 제거하기 위해 reset css 를 적용하였다. (구글링 reset css 검색)
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400&display=swap');
//   html, body, div, span, applet, object, iframe,
//   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
//   a, abbr, acronym, address, big, cite, code,
//   del, dfn, em, img, ins, kbd, q, s, samp,
//   small, strike, strong, sub, sup, tt, var,
//   b, u, i, center,
//   dl, dt, dd, ol, ul, li,
//   fieldset, form, label, legend,
//   table, caption, tbody, tfoot, thead, tr, th, td,
//   article, aside, canvas, details, embed,
//   figure, figcaption, footer, header, hgroup,
//   menu, nav, output, ruby, section, summary,
//   time, mark, audio, video {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font-size: 100%;
//     font: inherit;
//     vertical-align: baseline;
//   }
//
//   /* HTML5 display-role reset for older browsers */
//   article, aside, details, figcaption, figure,
//   footer, header, hgroup, menu, nav, section {
//     display: block;
//   }
//
//   body {
//     line-height: 1;
//   }
//
//   ol, ul {
//     list-style: none;
//   }
//
//   blockquote, q {
//     quotes: none;
//   }
//
//   blockquote:before, blockquote:after,
//   q:before, q:after {
//     content: '';
//     content: none;
//   }
//
//   table {
//     border-collapse: collapse;
//     border-spacing: 0;
//   }
//
//   * {
//     box-sizing: border-box;
//   }
//
//   // 만약 상단에서 @import 가 실패하면 이하의 글꼴을 적용한다.
//   body {
//     font-family: 'Source Sans Pro', sans-serif;
//     background-color: ${props => props.theme.bgColor};
//     color: ${props => props.theme.textColor};
//   }
//
//   // Link 태그는 결국 HTML 에서 a 태그로 바뀌므로 이곳에서 CSS 를 설정한다.
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `;

// function App() {

    // props 를 원하는 Component 에 도달할 때 까지 계속 전달하여 사용하는 기존방식.

    // const [isDark, setIsDark] = useState(false);
    // const toggleDark = () => {
    //     setIsDark(current => !current);
    // }

    // recoil 을 사용하는 새로운 방식.
    // const isDark = useRecoilValue(isDarkAtom)

    // return (
        // ThemeProvider 를 이용하여 styled-components 에서 이용할 수 있는 props 를 전달,
        // 해당 props 를 이용하여 css 를 바꾸게 만들 수 있다.
    //     <ThemeProvider theme={isDark ? darkTheme : LightTheme}>
    //         <GlobalStyle/>
    //         {/*<Router toggleDark={toggleDark} isDark={isDark}/>*/}
    //         <Router />
    //         <ReactQueryDevtools initialIsOpen={true} />
    //     </ThemeProvider>
    // );
// }
//
// export default App;
