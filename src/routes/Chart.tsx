import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";

interface IChartProps {
    coinId: string;
}

interface IChartData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}


function Chart({coinId}: IChartProps) {

    const {isLoading, data} = useQuery<IChartData[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId)
    );

    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[{
                        data: [
                            {
                                x: data?.map(price => price.time_close)[0],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[0]
                            },
                            {
                                x: data?.map(price => price.time_close)[1],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[1]
                            },
                            {
                                x: data?.map(price => price.time_close)[2],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[2]
                            },
                            {
                                x: data?.map(price => price.time_close)[3],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[3]
                            },
                            {
                                x: data?.map(price => price.time_close)[4],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[4]
                            },
                            {
                                x: data?.map(price => price.time_close)[5],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[5]
                            },
                            {
                                x: data?.map(price => price.time_close)[6],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[6]
                            },
                            {
                                x: data?.map(price => price.time_close)[7],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[7]
                            },{
                                x: data?.map(price => price.time_close)[8],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[8]
                            },
                            {
                                x: data?.map(price => price.time_close)[9],
                                y: data?.map(price => [
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close
                                ])[9]
                            },
                        ]
                    }]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            type: "candlestick",
                            height: 500,
                            width: 750,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        xaxis: {
                            axisBorder: {show: false},
                            axisTicks: {show: false},
                            categories: data?.map(price => price.time_close.substring(5, 10)),
                            type: "datetime",
                            title: {
                                text: "times",
                                offsetX: 0,
                                offsetY: 0,
                            }
                        },
                        yaxis: {
                            show: true,
                            seriesName: "price",
                            decimalsInFloat: 0,
                            title: {
                                text: "price (USD)",
                                rotate: -90,
                                offsetX: 0,
                                offsetY: 0,
                            }
                        },
                        tooltip: {
                            enabled: true,
                            y: {
                                formatter: (value) => `$ ${value.toFixed(3)}`
                            }
                        },
                        stroke: {
                            width: 2,
                        },
                    }
                    }
                />
            )}
        </div>
    )
}

export default Chart;