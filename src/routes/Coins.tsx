import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import {Helmet} from "react-helmet";

// 이하의 자료유형을 바탕으로 Coin 정보의 interface 를 작성.
interface ICoins {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
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

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${props => props.theme.boxColor};
  color: ${props => props.theme.bgColor};
  margin-bottom: 12px;
  border-radius: 10px;

  a {
    display: flex;
    padding: 10px;
    transition: color 0.2s ease-in-out;
    align-items: center;
  }

  &:hover {
    color: ${props => props.theme.linkColor};
  }
`;


function Coins() {
    // React Query 를 사용하지 않은 예시.

    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     // (function 입력)(); 하는 것으로 useEffect 내에서 function 을 바로 실행 가능하다.
    //     (async () => {
    //
    //         const resp = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await resp.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, [])

    // React Query 사용하여 코드를 압축.
    // useQuery : api.ts 에서 설정한 fetchCoins function 을 호출하고, 그 결과를 data 에 담는다.
    // 만약 fetchCoins(=fetcher function) 가 loading 중이면 isLoading 으로 이를 알린다.
    // 기존에 데이터를 .slice() 하였던 부분은 return 내부에서 처리한다.
    const {isLoading, data} = useQuery<ICoins[]>("allCoins", fetchCoins)

    return (
        <Container>
            <Helmet>
                <title>TOP 100 COINS</title>
            </Helmet>
            <Header>
                <Title>TOP 100 COINS</Title>
            </Header>
            {isLoading ? (
                <Loader>LOADING....</Loader>
            ) : (
                <CoinList>
                    {/* 기존에 데이터를 .slice() 하였던 부분은 여기서 처리한다. */}
                    {data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname: `/reactchallenge/${coin.id}`,
                                state: {name: coin.name}
                            }}>
                                {/*아이콘을 다운받아 사용한다. symbol 은 대문자이므로 .toLowerCase() 로 소문자로 가공*/}
                                <Img src={
                                    `https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                &nbsp;{coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    );
}

export default Coins;