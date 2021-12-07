import styled from "styled-components";

// interface 는 props 의 자료형을 지정한다.
// typescript 는 자료형을 지정해주어야 하기 때문에
// interface 를 이용하여 자료형을 지정할 필요가 있다.
interface CircleProps {
    bgColor:string;
}

interface ContainerProps {
    bgColor:string;
}

const Container = styled.div<ContainerProps>`
  width:200px;
  height:200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

const CircleA = ({bgColor}: CircleProps) => {
    return (
        <Container bgColor={bgColor}/>
    )
}

export default CircleA;