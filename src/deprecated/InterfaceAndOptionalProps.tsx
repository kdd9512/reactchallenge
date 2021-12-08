import { useState } from "react";
import styled from "styled-components";

// interface 는 props 의 자료형을 지정한다.
// typescript 는 자료형을 지정해주어야 하기 때문에
// interface 를 이용하여 자료형을 지정할 필요가 있다.
interface CircleProps {
    bgColor:string;

    // 선택적 props (optional props) : 얘는 있던 없던(즉, 선택사항) 동작에 문제가 없게끔 한다.
    borderColor?:string;
    text?:string;
}

interface ContainerProps {
    bgColor:string;
    borderColor:string;
}

const Container = styled.div<ContainerProps>`
  width:200px;
  height:200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border:1px solid ${props => props.borderColor};
`;

const InterfaceAndOptionalProps = ({bgColor, borderColor, text="none"}: CircleProps) => {

    // 보통 useState 는 초기값을 통해 state 와 setState 의 값을 추론하여 자료형을 제시하나,
    // 아래의 경우처럼 < 자료형 | 자료형 > 으로 state 의 자료형을 하나 이상 지정해 줄 수도 있다.
    // const [value, setValue] = useState<number | string>(0);


    return (
        // 위의 interface 를 보면 borderColor 가 한쪽만 optional 이다.
        // 이 경우 borderColor 가 undefined 일 경우 에러를 발생시키는데
        // 이하와 같이 default 값을 지정하는 것으로 해결할 수 있다.

        // (borderColor 가 undefined 일 경우, ?? "transparent" 를 적용한다.)
        // borderColor={borderColor ?? "transparent"}
        <Container bgColor={bgColor} borderColor={borderColor ?? "transparent"}>
            {text}
        </Container>
    )
}

