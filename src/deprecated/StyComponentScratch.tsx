import React, {useState} from "react";
import styled, {keyframes} from "styled-components";

// Object 의 shape (자료유형) 를 지정하기 위한 interface.
interface BoxProps {
    bgColor?: string;
    textColor?:string;
}


const First = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
`;

// keyframes 를 이용하여 애니메이션 효과를 부여한다.
const anima = keyframes`
  // from / to 로도 효과를 부여할 수 있으나,
  // 아래와 같이 애니메이션 효과 진척도에 따라 다른 효과를 주는 것도 가능하다.
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;

const SText = styled.span`
  font-size: 25px;
`;

// bgColor 를 props 로 받아 처리하게끔 설정하여 중복되는 css 코드를 줄일 수 있다.
// styled-components 에 들어오는 props 의 자료유형은 interface 로 설정하고 <interface명> 으로 사용한다.
const Box = styled.div<BoxProps>`
  background-color: ${(props) => (props.bgColor)};
  color: ${(props) => (props.theme.textColor)};
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${anima} 3s linear infinite;

  // 내부의  item 이 있다면 그 item 의 css 는 이 안에서 처리가 가능하다.
  // "&:" pseudo-selector : 태그 안의 elements 를 선택하여 css 효과를 부여할 수 있다.

  // 이하와 같이 특정 styled-components 를 지목할 수도 있다. (SText 부분)
  // 이 방법을 이용하면 item 의 태그 종류에 구애받지 않아도 된다.(item 의 태그가 변경되어도 작동함.)
  ${SText} {
    &:hover {
      font-size: 55px;
    }

    &:active {
      opacity: 0;
    }
  }
;
`;

// styled-components 확장. 기존에 존재하는 styled 를 불러와서 추가로 css 설정이 가능하다.
// java 의 extends ??? 와 완전히 동일한 개념.
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: darkorange;
  border-radius: 15px;
  border: 0;
`;

// .attrs({}) 로 전달될 모든 속성을 가진 오브젝트를 담을 수 있다.
const Input = styled.input.attrs({required: true, minLength: 5})`
  background-color: tomato;
`;

const StyComponentScratch = () => {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            // 현재 target 인 input 에서 발생하는 이벤트를 value 에 담고
            currentTarget: {value},
        } = event;
        // 위에서 값이 담긴 value 는 setValue 로 넘어온다.
        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello", value);
    }

    return (
        <>
            <First>
                <Box bgColor="darkgray">
                    <SText>asdf</SText>
                </Box>
                <Circle bgColor="tomato">
                    <SText as="p">asdf</SText>
                </Circle>
            </First>
            <Btn>button</Btn>

            {/*"as" props 를 보내서 최종적으로 어떤 태그를 적용할 지 결정할 수 있다.*/}
            <Btn as="a" href="/">
                button
            </Btn>
            <First as="header">
                <Input/>
                <Input/>
            </First>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="username"/>
                <button type="submit">login</button>
            </form>
        </>
    );
}

export default StyComponentScratch;
