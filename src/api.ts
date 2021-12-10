// Coins.tsx 의 async / await 부분을 담당.
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`)
        .then(resp => resp.json()
        );
}

// Coin.tsx 의 async / await 부분 담당.
export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`)
        .then(resp => resp.json()
        );
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`)
        .then(resp => resp.json()
        );
}

export function fetchCoinHistory(coinId: string) {
    // historical 의 필수 query param 인 시작일과 종료일을 계산한다.
    // 먼저 JS 는 기본적으로 milliseconds 를 제공하므로 1000 으로 나누어야 한다.
    // 이후 해당 값을 버림한다(Math.floor()).
    const endDate = Math.floor(Date.now() / 1000);

    // 60초 60분 24시간 "9일 + 1(배열은 0부터 시작이므로 가지고오고 싶은 자료 일수 -1)" 분의 자료를 가지고 온다.
    const startDate = endDate - 60 * 60 * 24 * 9;

    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
        .then(resp => resp.json()
        );
}