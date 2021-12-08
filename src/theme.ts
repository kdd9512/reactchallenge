import {DefaultTheme} from "styled-components";

// ThemeProvider 에서 사용할 props 를 전달한다.
// 여기서 설정한 색상이 App의 styled-components 에 전달되어 css 를 결정한다.

// interface 인 DefaultTheme 을 extend.
export const DarkMod: DefaultTheme = {
    bgColor:"black",
    textColor:"white",
    btnColor: "teal"
};

export const LightMod:DefaultTheme = {
    bgColor:"white",
    textColor:"black",
    btnColor: "tomato",
}