import {Link, Route, Switch, useLocation, useParams, useRouteMatch} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Price from "./Price";
import Chart from "./Chart";
import {useQuery} from "react-query";
import {fetchCoinInfo, fetchCoinTickers} from "../api";
import {Helmet} from "react-helmet";

// interface
interface RouteParams {
    coinId: string;
}

interface RouteState {
    name: string;
}

interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    contract: string;
    platform: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    links_extended: ILinkEx[];
    first_data_at: string;
    last_data_at: string;
}

interface ILinkEx {
    type: string;
    url: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_15m: number;
            percent_change_30m: number;
            percent_change_1h: number;
            percent_change_6h: number;
            percent_change_12h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            percent_change_1y: number;
            ath_price: number;
            ath_date: string;
            percent_from_price_ath: number;
        }
    };
}

// styled-components
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

const Overview = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => props.theme.detailBoxColor};
  min-width: 50px;
  min-height: 40px;
  border-radius: 10px;
  box-shadow: 6px 7px 15px darkslategrey;

  li {
    font-size: 23px;
    margin-right: 10px;
    padding: 10px 0;
    text-align: inherit;
    align-items: inherit;
  }

  span(li) {
  max-font-size: border;
}
`;

const Desc = styled.span`
  padding: 20px 0;
  text-align: center;
  display: inherit;
  font-size: 20px;
  font-weight: bold;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.detailBoxColor};
  padding: 7px 0;
  border-radius: 7px;
  box-shadow: 6px 7px 15px darkslategrey;
  color: ${props => props.isActive ?
          props.theme.linkColor : props.theme.textColor
  };

  a {
    display: block;
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.detailBoxColor};
  margin: 20px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.detailBoxColor};
  box-shadow: 6px 7px 15px darkslategrey;
  display: block;

  a {
    font-size: 35px;
    font-weight: bold;
    color: ${props => props.theme.textColor};
  }
`;


// main function
function Coin() {
    // 각 코인마다 존재하는 고유한 id 를 param 으로 전달, 고유한 key 로서 사용.
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();

    // 특정 url 에 있는지 여부를 확인할 수 있는 useRouteMatch()
    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");

    // React Query 를 사용하지 않은 예시.
    // const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState<IInfoData>();
    // const [priceInfo, setPriceInfo] = useState<IPriceData>();
    //
    // useEffect(() => {
    //     (async () => {
    //         const infoData = await (
    //             await fetch(
    //                 `https://api.coinpaprika.com/v1/coins/${coinId}`)
    //         ).json();
    //         const priceData = await (
    //             await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    //         ).json();
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         setLoading(false);
    //     })();
    //     //    deps 가 변하면 uesEffect 가 실행된다.
    // }, []);

    // React Query 사용하여 코드를 압축.
    // useQuery : api.ts 에서 설정한 fetchCoins function 을 호출하고, 그 결과를 data 에 담는다.
    // 만약 fetchCoins(=fetcher function) 가 loading 중이면 isLoading 으로 이를 알린다.
    // ** 이하와 같이 coinId 로 key 값이 겹치는 경우, 배열에 넣고 ["지정할 key 이름",사용될 key 값] 으로 다른 key 값을 부여한다.
    // isLoading 과 data 역시 겹치는데, {겹치는 변수:새이름} 방식으로 새 이름을 부여한다.
    const {isLoading: infoLoading, data: infoData} = useQuery<IInfoData>(
        ["info", coinId],
        () => fetchCoinInfo(coinId)
    );

    const {isLoading: tickersLoading, data: tickersData} = useQuery<IPriceData>(
        ["tickers", coinId],
        () => fetchCoinTickers(coinId),
        {
            refetchInterval: 4000,
        }
    );

    // isLoading 이 두 개 이므로 or(||) 를 사용하여 loading 둘 중 하나임을 알려야 한다.
    const loading = infoLoading || tickersLoading;

    return (
    <>
        {/* 메인페이지 되돌아가기 버튼 */}
        <Button>
            <Link to={`/`}>&larr; back</Link>
        </Button>
        <Container>
            <Helmet>
                <title>
                    {state?.name ? state.name.toUpperCase() :
                        loading ? "Loading..." : infoData?.name.toUpperCase()}
                </title>
            </Helmet>
            <Header>
                <Title>{state?.name ? state.name.toUpperCase() :
                    loading ? "Loading..." : infoData?.name.toUpperCase()}</Title>
            </Header>
            {loading ? (
                <Loader>LOADING....</Loader>
            ) : (
                <div>
                    <Overview>
                        <li><span>&nbsp;RANK:</span><br/>
                            <span>
                                {infoData?.rank}
                            </span>
                        </li>
                        <li><span>&nbsp;SYMBOL:</span><br/>
                            <span>
                                {`$${infoData?.symbol}`}
                            </span>
                        </li>
                        <li><span>&nbsp;PRICE:</span><br/>
                            <span>
                                ${tickersData?.quotes.USD.price.toFixed(3)}
                            </span>
                        </li>
                    </Overview>
                    <Desc>
                        {infoData?.description ? infoData?.description : "No description"}
                    </Desc>
                    <Overview>
                        <li>
                            <span>&nbsp;TOTAL SUPPLY:</span><br/>
                            <span>
                                {tickersData?.total_supply ? tickersData?.total_supply : "No data"}
                            </span>
                        </li>
                        <li>
                            <span>MAX SUPPLY:</span><br/>
                            <span>
                                {tickersData?.max_supply ? tickersData?.max_supply : "No data"}
                            </span>
                        </li>
                    </Overview>

                    {/* chart & price links*/}
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>

                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price tickersData={tickersData}/>
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId}/>
                        </Route>
                    </Switch>
                </div>
            )}
        </Container>
    </>
)
    ;
}

export default Coin;