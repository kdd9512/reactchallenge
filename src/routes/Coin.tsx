import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";

interface RouteParams {
    coinId:string;
}

interface RouteState {
    name:string;
}

const Container = styled.div`
  padding: 0 20px;
  max-width: 500px;
  margin: 10px auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 45px;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
`;

const Loader = styled.span`
  color: ${props => props.theme.textColor};
  text-align: center;
  display: block;
`;


function Coin() {
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();

    return (
        <Container>
            <Header>
                <Title>{state?.name.toUpperCase() || coinId.toUpperCase()}</Title>
            </Header>
            {loading ? (
                <Loader>LOADING....</Loader>
            ) : null}
        </Container>
    );
}

export default Coin;