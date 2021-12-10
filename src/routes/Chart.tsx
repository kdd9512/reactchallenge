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
                    type="line"
                    series={[
                        {
                            name: "open price",
                            data: data?.map(price => price.open),
                        },
                        {
                            name: "close price",
                            data: data?.map(price => price.close),
                        },
                    ]}
                    options={{
                        theme:{
                            mode:"dark",
                        },
                        chart: {
                            height:500,
                            width:750,
                            toolbar:{
                                show:false,
                            },
                            background:"transparent",
                        },
                        xaxis:{
                            axisBorder:{show:false},
                            axisTicks:{show:false},
                            categories: data?.map(price => price.time_close.substring(5,10)),
                            max:10,
                            title: {
                                text: "times",
                                offsetX: 0,
                                offsetY: 0,
                            }
                        },
                        yaxis: {
                            show: true,
                            seriesName: "price",
                            decimalsInFloat:0,
                            title: {
                                text: "price",
                                rotate: -90,
                                offsetX: 0,
                                offsetY: 0,
                            }
                        },
                        tooltip:{
                          y:{
                              formatter: (value) => `$ ${value.toFixed(3)}`
                          }
                        },
                        stroke: {
                          width:2,
                        },
                    }
                    }


                />
            )}
        </div>
    )
}

export default Chart;