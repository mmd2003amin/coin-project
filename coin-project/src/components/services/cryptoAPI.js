const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-xEd8eFn2fXSzJ1WDiYUeVy5z";

const getCoinList = (page , currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&x_cg_demo_api_key=${API_KEY}`
};

const marketChart = (id) => {
    return `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`
}

export { getCoinList , marketChart } ;