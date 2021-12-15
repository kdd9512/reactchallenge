import {useQuery} from "react-query";
// import {fetchCoinTickers} from "../api";
import styled from "styled-components";

// interface IPriceProps {
//     tickersData: any;
// }

// const Desc = styled.span<{ isMinus: boolean }>`
//   padding: 10px 0;
//   text-align: center;
//   display: inherit;
//   font-size: 20px;
//   font-weight: bold;
//
//   span {
//     color: ${props => props.isMinus ? "red" : props.theme.textColor};
//   }
//
// `;

// function Price({tickersData}: IPriceProps) {
//
//     return (
//         <div>
//             <Desc isMinus={tickersData?.quotes.USD.price < 0}>
//                 PRICES:
//                 <span> ${tickersData?.quotes.USD.price.toFixed(3)}</span>
//             </Desc>
//             <Desc isMinus={tickersData?.quotes.USD.percent_change_1h < 0}>
//                 1 Hour :
//                 <span> {tickersData?.quotes.USD.percent_change_1h}%</span>
//             </Desc>
//             <Desc isMinus={tickersData?.quotes.USD.percent_change_24h < 0}>
//                 24 Hour :
//                 <span> {tickersData?.quotes.USD.percent_change_24h}%</span>
//             </Desc>
//             <Desc isMinus={tickersData?.quotes.USD.percent_change_7d < 0}>
//                 Week:
//                 <span> {tickersData?.quotes.USD.percent_change_7d}%</span>
//             </Desc>
//             <Desc isMinus={tickersData?.quotes.USD.percent_change_30d < 0}>
//                 Month:
//                 <span> {tickersData?.quotes.USD.percent_change_30d}%</span>
//             </Desc>
//             <Desc isMinus={tickersData?.quotes.USD.percent_change_1y < 0}>
//                 Year:
//                 <span> {tickersData?.quotes.USD.percent_change_1y}%</span>
//             </Desc>
//         </div>
//     )
// }

// export default Price;