import {useQuery} from "react-query";
// import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
import {useRecoilValue} from "recoil";
// import {isDarkAtom} from "../atoms";

// interface IChartProps {
//     coinId: string;
//     // isDark: boolean;
// }
//
// interface IChartData {
//     time_open: string;
//     time_close: string;
//     open: number;
//     high: number;
//     low: number;
//     close: number;
//     volume: number;
//     market_cap: number;
// }

// props 를 원하는 Component 에 도달할 때 까지 계속 전달하여 사용하는 기존방식.
// function Chart({coinId,isDark}: IChartProps) {
// function Chart({coinId}: IChartProps) {
//
//     // recoil 을 사용하는 새로운 방식.
//     // atom 의 값을 관찰하고 내부의 state 를 사용한다.
//     const isDark = useRecoilValue(isDarkAtom);
//
//     const {isLoading, data} = useQuery<IChartData[]>(
//         ["ohlcv", coinId],
//         () => fetchCoinHistory(coinId), {
//             refetchInterval: 10000,
//         }
//     );
//
//     return (
//         <div>
//             {isLoading ? (
//                 "Loading Chart..."
//             ) : (
//                 <ApexChart
//                     type="candlestick"
//                     series={[{
//                         data: data?.map(price => ({
//                                 x: price.time_close.slice(0, 10),
//                                 y: [
//                                     price.open,
//                                     price.high,
//                                     price.low,
//                                     price.close
//                                 ]
//                             })
//                         )
//                     }]}
//                     options={{
//                         theme: {
//                             mode: isDark ? "dark" : "light",
//                         },
//                         chart: {
//                             height: 300,
//                             width: 500,
//                             toolbar: {
//                                 show: false,
//                             },
//                             background: "transparent",
//                         },
//                         xaxis: {
//                             axisBorder: {show: true},
//                             axisTicks: {
//                                 show: true,
//                                 color: isDark ? "white" : "darkgrey",
//                             },
//                             labels: {show: true},
//                         },
//                         yaxis: {
//                             show: true,
//                             labels: {
//                                 formatter: (value) => `$ ${value.toFixed(0)}`
//                             },
//                             tooltip: {
//                                 enabled: true,
//                             }
//                         },
//                         tooltip: {
//                             enabled: true,
//                             y: {
//                                 formatter: (value) => `$ ${value.toFixed(0)}`
//                             },
//                             fixed: {
//                                 enabled: true,
//                                 position: 'topRight',
//                             }
//                         },
//                         grid: {
//                             show: true,
//                             borderColor: isDark ? "white" : "darkgrey",
//                         },
//                         stroke: {
//                             width: 1.5,
//                         },
//                     }
//                     }
//                 />
//             )}
//         </div>
//     )
// }

// export default Chart;